(ns adzerk.boot-reload.init8789 (:require [adzerk.boot-reload.client :as client] anansi.reading.app))
(client/connect "ws://localhost:46827" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (anansi.reading.app/render))})