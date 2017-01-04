(ns anansi.data
  (:import [java.io ByteArrayInputStream ByteArrayOutputStream])
  (:require
            [clojure.tools.reader.edn :as edn]
    [clj-http.client :as client]
    [cheshire.core :refer [parse-string]]))

(defn recent-pins []
  (let [url "https://mathpunk:u890ppnb@api.pinboard.in/v1/posts/recent?format=json"
        body (:body (client/get url))
        data (parse-string body true) ]
    (str data)))

(defn pin-summary []
  (let [url "data/pins_all.json"
        body (slurp url)
        data (parse-string body true)]
    (str {:count (count data)})))

(defn pin-edn []
  (let [url "data/pins_all.json"
        body (slurp url)
        data (parse-string body true)]
      (println (edn/read-string (str data)))))
