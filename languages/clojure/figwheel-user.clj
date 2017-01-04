;; A Clojurescript-Cider user.clj
;; ===============================
(ns user
  (:use [figwheel-sidecar.repl-api :as ra]))

(defn start [] (ra/start-figwheel!))

(defn stop [] (ra/stop-figwheel!))

(defn cljs [] (ra/cljs-repl "dev"))

(defonce fig (promise))

(defn figwheel []
  (do
    (deliver fig (start))
    (cljs)))
