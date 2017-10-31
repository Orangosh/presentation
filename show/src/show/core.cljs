(ns show.core
  (:require
    [reagent.core :as reagent]
    [re-frame.core :as re-frame]
    [re-frisk.core :as re-frisk]
    [cljs.spec :as s]
    [show.slides.views :as views]
    [show.slides.slides :as slides]))

(declare slides)

(def initial-state
  {:slideshow/current-slide 0
   :slideshow/broken-slide  "x"})


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; events


(re-frame/reg-event-fx
  :slideshow/initialize
  (fn [{:keys [db]}]
    {:db initial-state}))

(def log-to-re-frisk
  (re-frame/->interceptor
    :id :log-to-re-frisk
    :before (fn [context]
              (re-frisk/add-in-data
                [:event-log
                 (first (get-in context [:coeffects :event]))
                 :before] context)
              context)
    :after (fn [context]
             (re-frisk/add-in-data
               [:event-log
                (first (get-in context [:coeffects :event]))
                :before] context)
             context)))

(defn check-int-spec [val]
  (s/valid? (s/spec int?) val))

;; Note - spec messages are being printed out to devtools, not re-frisk
;; Clearing the queue on error means that the logging to re-frisk doesn't run
;; I'm sure there's a way to do this though, I just haven't figured it out yet
;; Comment or uncomment the success and failure lines to see the difference
(def check-slide-specs
  (re-frame/->interceptor
    :id :check-slides-specs
    :before (fn [context]
              ;(let [current-slide (get-in context [:coeffects :db :slideshow/current-slide]) ; Success
              (let [current-slide (get-in context [:coeffects :db :slideshow/current-slide]) ; Failure
                    spec-result (check-int-spec current-slide)]
                (println "Current Slide: " current-slide)
                (println "Spec Result: " spec-result)
                (if spec-result
                  (assoc-in context [:db :spec/success]
                            {:event   (first (get-in context [:coeffects :event]))
                             :message ":slideshow/current-slide is an int!"})
                  (assoc-in context [:queue]
                            []))))))

(re-frame/reg-event-fx
  :slideshow/next-slide
  [log-to-re-frisk check-slide-specs]
  (fn [{:keys [db]}]
    {:db (assoc db
           :slideshow/current-slide
           (if (< (:slideshow/current-slide db)
                  (count slides/slides_order))
             (+ 1 (:slideshow/current-slide db))
             (:slideshow/current-slide db)))}))

(re-frame/reg-event-fx
  :slideshow/prev-slide
  [log-to-re-frisk check-slide-specs]
  (fn [{:keys [db _]}]
    {:db (assoc db
           :slideshow/current-slide
           (if (> (:slideshow/current-slide db) 0)
             (- (:slideshow/current-slide db) 1)
             (:slideshow/current-slide db)))}))

(re-frame/reg-sub
  :slideshow/current-slide
  (fn [db _]
    (:slideshow/current-slide db)))

(defn slideshow []
  [:div.slideshow-half-width
   [:div.slide
    [(nth slides/slides_order @(re-frame/subscribe
                    [:slideshow/current-slide]))]]])

(defn mount-root []
  (reagent/render
    [slideshow]
    (js/document.getElementById "app")))

(defn on-jsload []
  (mount-root))

(defn ^:export run []
  (re-frame/dispatch-sync
    [:slideshow/initialize])
  (re-frisk/enable-re-frisk!
    {:x 0 :y 0})
  (mount-root))
