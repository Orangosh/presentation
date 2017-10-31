(ns show.slides.slides
    (:require
     [reagent.core :as reagent]
     [re-frame.core :as re-frame]
     [re-frisk.core :as re-frisk]
     [cljs.spec :as s]
     [show.slides.views :as views]))



(defn slide-header [header-text]
  [:div.slide-header
   [:span ""]
   [:span header-text]
   [:span.controls
    [:i.material-icons.control.left
     {:on-click #(re-frame/dispatch
                  [:slideshow/prev-slide])}
     "chevron_left"]
    [:i.material-icons.control.right
     {:on-click #(re-frame/dispatch
                  [:slideshow/next-slide])}
     "chevron_right"]]])


(defn title-slide []
  [:div.title-slide
   [slide-header ""]
   [:div.slide-body
    [:div "Snapshots of primary"]
    [:br]
    [:div "Human Cytomegalovirus infection"]
    [:br]
    [:img.bird {:src "img/clj.png" :alt "My Image", :width "700px", :height "450px"}]
]])

(defn layout-slide []
  [:div.title-slide
   [slide-header "This is a header with optimized size picture"]
   [:div.slide-body
    [:img.bird {:src "img/vann.png" :alt "My Image", :width "1800px", :height "920px"}]]])



(defn intro-slide []
  [:div.intro-slide
   [slide-header "Here you can add header text"]
   [:div.slide-body
    [:div.list "-> A primary row"
     [:div.list "- Sub row 1"]
     [:div.list "- Sub row 2"]
     [:div.list "- Sub row 3"]
     [:div.list [:font {:color "991151"} "- With colors"]]
     [:div.list [:font {:color "990000"} "- With colors"]]
     [:div.list "- Sub row 6"]
     [:div.list [:font {:color "991151"} "- With colors"]]
     [:div.list "- Sub row 7"]
     [:div.list "- Sub row 8"]]
    [:div.list "-> A primary row"]]])

(defn intro+pic []
  [:div.intro-slide
   [slide-header "Intro slide with marginized pictures"]
   [:div.slide-body
    [:div.list "- Class E genome architecture"
     [:div.list "- Consisiting of two covalently linked domains (L and S)"]
     [:div.list "- Comprising unique (UL US) and inverted repeat sequences" ]
     [:div.list "- Inverted repeat sequences (TLR<---->IRL: IRS<---->TRS)"]
     [:div.list "- 4 genomic isomers"]]
    [:img.re-frame-logo {:src   "img/circos2"
                         :style {:margin-left "150px"} :width "1600px", :height "400px"}]]])

(defn domino-1 []
  [:div.intro-slide
   [slide-header "Pathogenetic mechanisms"]
   views/domino-1])

(defn domino-2 []
  [:div.intro-slide
   [slide-header "Patogenetic mehanisms"]
   views/domino-2])

(def slides_order
  [title-slide
   layout-slide
   intro-slide
   intro+pic
   domino-1
   domino-2])
