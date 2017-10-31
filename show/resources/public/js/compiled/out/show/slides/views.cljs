(ns show.slides.views)

(def primary "#2A3764")
(def secondary "#D36700")
(def secondary-bgcolor "#D7CFC3")
(def line-width 4)
(def font-size 32)

(defn h-line [x1 x2 y color arrow?]
  (if (<= x2 x1)
    [:g {:stroke color
         :fill   color}
     [:line {:x1           x1
             :x2           (+ x2 2)
             :y1           y
             :y2           y
             :stroke-width line-width}]
     (if arrow?
       [:polygon {:points [x2 y (+ x2 25) (- y 10) (+ x2 25) (+ y 10)]}])]

    [:g {:stroke color
         :fill   color}
     [:line {:x1           x1
             :x2           (- x2 2)
             :y1           y
             :y2           y
             :stroke-width line-width}]
     (if arrow?
       [:polygon {:points [x2 y (- x2 25) (- y 10) (- x2 25) (+ y 10)]}])]))

(defn v-line [y1 y2 x color arrow?]
  (if (<= y2 y1)
    [:g {:stroke color
         :fill   color}
     [:line {:x1           x
             :x2           x
             :y1           y1
             :y2           (+ y2 2)
             :stroke-width line-width}]
     (if arrow? [:polygon {:points [x y2 (- x 10) (+ y2 25) (+ x 10) (+ y2 25)]}])]
    [:g {:stroke color
         :fill   color}
     [:line {:x1           x
             :x2           x
             :y1           y1
             :y2           (- y2 2)
             :stroke-width line-width}]
     (if arrow? [:polygon {:points [x y2 (- x 10) (- y2 25) (+ x 10) (- y2 25)]}])]))

(defn rect-2 [x y width height & text1 text2 text3 text4]
  [:g [:rect {:width        width
              :height       height
              :x            x
              :y            y
              :stroke-width line-width
              :stroke       primary
              :fill         secondary-bgcolor}]
   [:text {:x           (+ x (/ width 2))
           :y           (+ y (/ height 4) (/ font-size 2))
           :text-anchor "middle"
           :fill        primary}
    text1]
   [:text {:x           (+ x (/ width 20))
           :y           (+ y (* 2 (/ height 4)) 10)
           :text-anchor "left"
           :fill        primary}
    text2]
   [:text {:x           (+ x (/ width 20))
           :y           (+ y (* 2 (/ height 4)) 60)
           :text-anchor "left"
           :fill        primary}
    text3]
   [:text {:x           (+ x (/ width 20))
           :y           (+ y (* 2 (/ height 4)) 110)
           :text-anchor "left"
           :fill        primary}
    text4]])

(def events-map
  {:domino-1 [rect-2 300 200 500 350
              "Transmission events"
              "1. Contamination"
              "2. Replication-> decay"
              "3. Replication-> latency"]
   :domino-2 [rect-2 1100 200 500 350
              "Primay infection"
              "1) Founder effect"
              "2) Founder population"
              "3) Complementation"]
   :1->2     [h-line 810 1090 375 "white" true]
   })

(def domino-1
  [:div.slide-body {:style {:font-size    "40px"
                            :margin-left  0
                            :padding-left 0}}
   (let [width 1920
         height 1056]
     [:svg {:width    width
            :height   height
            :view-box [0 0 1920 1056]}
      [:g (:domino-1 events-map)]])])

(def domino-2
  [:div.slide-body {:style {:font-size    "40px"
                            :margin-left  0
                            :padding-left 0}}
   (let [width 1920
         height 1056]
     [:svg {:width    width
            :height   height
            :view-box [0 0 1920 1056]}
      [:g (:domino-1 events-map)
       (:domino-2 events-map)
       (:1->2 events-map)]])])
