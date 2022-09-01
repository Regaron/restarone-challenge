var Model = (function () {
    var sidebarItems = [{
        label: "Dashboard",
        leftIcon: "home",
        badge: 1
    }, {
        label: "Leads",
        leftIcon: "my_location",
        rightIcon: "lock_open",
        badge: 2
    }, {
        label: "People",
        leftIcon: "person",
        badge: 3
    }, {
        label: "Companies",
        leftIcon: "business",
        badge: 4
    }, {
        label: "Pipelines",
        leftIcon: "double_arrow",
        badge: 5
    }, {
        label: "Projects",
        leftIcon: "work",
        badge: 6
    }, {
        label: "Tasks",
        leftIcon: "check_box",
        badge: 7
    }, {
        label: "Marketing Tools",
        leftIcon: "play_circle_outline",
    }, {
        label: "My Tracked Emails",
        leftIcon: "email",
        badge: 8
    }, {
        label: "Reports",
        leftIcon: "pie_chart",
    }, {
        label: "Legacy Reports",
        leftIcon: "insert_chart",
        badge: 9
    }, {
        label: "Settings",
        leftIcon: "settings",
        badge: 0
    }]

    var tableItems = [{}]

    return {
        sidebarItems,
        tableItems
    }
})()

var UIController = (function () {
    function createSidebarItem(sidebarItem) {
        var sidebarHTML = "<li class='divider'></li>"
        if (sidebarItem.label !== "Divider") {
            sidebarHTML = "<li class='sidebar__item'>" +
                "<span class='sidebar__item__badge'>" +
                (sidebarItem.badge > -1 ? "<span>"+sidebarItem.badge+"</span>" : "") +
                "</span>" +
                "<span class='material-icons sidebar__item__left-icon'>" +
                sidebarItem.leftIcon +
                "</span>" +
                "<span class='sidebar__item__label'>" +
                sidebarItem.label +
                "</span>" +
                "<span class='material-icons sidebar__item__right-icon'>" +
                (sidebarItem.rightIcon || "") +
                "</span>" +
                "</li>"
        }
        return sidebarHTML
    }
    return {
        createSidebar(sidebarItems) {
            var sidebarHTML = ""
            for (var i = 0; i < sidebarItems.length; i++) {
                sidebarHTML += createSidebarItem(sidebarItems[i])
            }
            document.getElementById("sidebar__nav").innerHTML = sidebarHTML
        },
        createTable(tableItems) {
            var tableItem = ""
            document.getElementById("table").appendChild(tableItem)
        },
        showDrawer(data) {
            var elements = [""]
            for (var i =0;i<elements.length;i++){
                document.getElementById("")
            }
        }
    }
})()

var App = (function (Model, UIController) {
    function setupEventListener() {
        document.getElementById("table").addEventListener("click", ev => {
        })
    }
    function showDrawer() {
    }
    function initialize() {
        UIController.createSidebar(Model.sidebarItems)
        UIController.createTable(Model.tableItems)
        setupEventListener()
    }
    return {
        initialize
    }
})(Model, UIController)

App.initialize()
