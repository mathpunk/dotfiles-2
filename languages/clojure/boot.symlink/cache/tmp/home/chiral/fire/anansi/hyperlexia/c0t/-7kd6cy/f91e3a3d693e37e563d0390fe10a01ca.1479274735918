(ns adzerk.boot-reload.init3303 (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:40389" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})