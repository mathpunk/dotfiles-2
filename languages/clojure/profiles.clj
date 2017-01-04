{:user {:plugins [[lein-npm "0.6.2"]
                  [lein-cljsbuild "1.1.4"]
                  [lein-ancient "0.6.10"]
                  [lein-try "0.4.3"]
                  [lein-plz "0.4.0-SNAPSHOT" :exclusions [[rewrite-clj] [ancient-clj]]]]}}
{:repl {:plugins [[cider/cider-nrepl "0.13.0-SNAPSHOT"]
                  [refactor-nrepl "2.3.0-SNAPSHOT"]]
        :dependencies [[alembic "0.3.2"]
                       [org.clojure/tools.nrepl "0.2.12"]]}}
