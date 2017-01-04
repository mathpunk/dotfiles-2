{
  ;; This is your main proton configuration file
  ;; While using proton, all atom related configuration has to go inside here
  ;; Everything that is not set up through this file will get wiped on start
  ;; We gave you some cool defaults below but if you don't like it, feel free to change :)

  ;; Layers you wish to have active
  ;; To get a list of all available layers, check github.com/dvcrn/proton/layers/
  :layers
  [
    ;; -----------------------------------
    ;; core layer. Don't remove.
    ;; -----------------------------------
    :core

    ;; -----------------------------------
    ;; apps
    :apps/notes ;; worth a try

    ;; -----------------------------------
    ;; tools
    :tools/git
    :tools/linter
    :tools/minimap
    :tools/bookmarks ;; ???
    :tools/build   ;; ???
    :tools/terminal

    ;; -----------------------------------
    ;; Languages
    :lang/clojure
    :lang/latex
    :lang/markdown
    :lang/javascript
    :lang/json

    ;; -----------------------------------
    ;; etc
    ;; -----------------------------------
    :fun/power_mode
  ]

  ;; Packages that are not part of a layer. List them here as keyword
  ;; All packages will be ensured to be installed. Stuff that is not listed here
  ;; Will get uninstalled so choose wisely!
  :additional-packages
  [
    :ex-mode
    :language-babel
    :advanced-open-file
    :color-picker
    :pigments
    :project-manager
    :markdown-writer
    ;; :asteroids
    ;; :atom-terminal
    ;; :atom-sort
    ;; :atomic-chrome
    ;; :atom-fuzzy-grep
    ;; :atom-open-this            ;; gf behavior
    ;; :autoclose-html
    ;; :autocomplete-plus
    ;; :autocomplete-modules
    ;; :custom-title
    ;; :expose
    ;; :git-time-machine
    ;; :graphviz-preview-plus
    ;; :highlight-selected
    ;; :imdone-atom
    ;; :atom-beautify
    ;; :merge-conflicts
    ;; :modern-react-snippets     ;; es6 react
    ;; :multi-cursor
    ;; :rest-client
    ;; :time-notes
    ;; :todo-show
    ;; :atom-npm
    ;; :atom-react-es2015-snippets
    ;; :elm-instant
    ;; :term2
    ;; https://atom.io/packages/imdone-atom
    ;; https://atom.io/packages/code-peek
    ;; https://nuclide.io/docs/languages/hack/
    ;; https://atom.io/packages/jumpy
    ;; https://atom.io/packages/project-plus
    ;; https://atom.io/packages/terminal-plus
    ;; https://github.com/mehcode/awesome-atom
  ]

  ;; Packages that you want to disable.
  ;; Note that packages will be removed except bundled packages.
  ;; Bundled packages will be disabled instead.
  ;; Use this configuration instead of atom's `core.disabledPackages`
  :disabled-packages [
    ;; :autoupdate-packages
    :about
    :welcome
    :atom-react
    :react
  ]
  ;; Proton takes over your atom configuration. All settings that are not listed here will get wiped
  ;; Configurations are denoted as 2 element vector consisting of k/v
  ;; sub-vectors inside v will get treated like javascript arrays
  :configuration
  [
    ;; don't wipe config
    ;; ["proton.core.wipeUserConfigs" false]

    ;; appearance
    ["editor.fontFamily" "Essential PragmataPro"]

    ;; the current default theme
    ["core.themes" ;;["nucleus-dark-ui" "atom-dark-fusion-syntax"]]
                   ["atom-material-ui" "base16-tomorrow-dark"]]
                   ;; ["one-dark-ui" "one-dark-syntax"]]

    ;; proton configuration
    ["proton.core.showTabBar" true]
    ["proton.core.relativeLineNumbers" false]

    ;; prefer classic vim mode over vim-mode-plus? Change this to :vim-mode
    ["proton.core.inputProvider" :vim-mode-plus]
  ]

  ;; Don't like a keybinding or want to add something yourself? Do it here
  ;; The following example adds a category `foo-category` under <SPC>z
  ;; and adds a action under `y` with the title `execute hello`.
  ;; Upon executing, proton will dispatch the action `hello` on the current view
  ;;
  ;; :keybindings {:z {:category "foo-category"
  ;;                   :y {:title "execute hello"
  ;;                       :action "hello"}}}
  :keybindings {}

  ;; Want some custom behavior inside a certain window?
  ;; Add your own nifty things here!
  :keymaps [{:selector ".tree-view" :keymap [["escape" "tree-view:toggle"]]}
            ;; Want to rebind ESC to something else? You can do that here.
            ;; If you are good with esc, just remove the following line.
            {:selector "atom-text-editor.vim-mode-plus:not(.normal-mode)" :keymap [["f d" "vim-mode-plus:activate-normal-mode"]]}
            ;; {:selector "atom-text-editor.vim-mode:not(.normal-mode)" :keymap [["f d" "vim-mode:activate-normal-mode"]]}
  ]
}
