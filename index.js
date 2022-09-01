var Model = (function () {
  var sidebarItems = [
    {
      label: "Dashboard",
      leftIcon: "home",
      badge: 1,
    },
    {},
    {
      label: "Leads",
      leftIcon: "my_location",
      rightIcon: "lock_open",
      badge: 2,
    },
    {
      label: "People",
      leftIcon: "person",
      badge: 3,
    },
    {
      label: "Companies",
      leftIcon: "business",
      badge: 4,
    },
    {
      label: "Pipelines",
      leftIcon: "double_arrow",
      badge: 5,
    },
    {
      label: "Projects",
      leftIcon: "work",
      badge: 6,
    },
    {},
    {
      label: "Tasks",
      leftIcon: "check_box",
      badge: 7,
    },
    {
      label: "Marketing Tools",
      leftIcon: "play_circle_outline",
    },
    {
      label: "My Tracked Emails",
      leftIcon: "email",
      badge: 8,
    },
    {
      label: "Reports",
      leftIcon: "pie_chart",
    },
    {
      label: "Legacy Reports",
      leftIcon: "insert_chart",
      badge: 9,
    },
    {},
    {
      label: "Settings",
      leftIcon: "settings",
      badge: 0,
    },
  ];

  var tableItems = [
    {
      firstName: "Mandeep Singh",
      company: "Eastern Engineering",
      title: "Chief of Staff",
      email: "mandeep@gmail.com",
      ownedBy: "David Da Silva",
      street: "8 East St.",
      created: "8/8/2021",
      lastContacted: "8/8/2021",
    },
    {
      firstName: "Harpid Singh",
      company: "Midwest Consultancy",
      title: "Chief of Engineer",
      email: "harpid@gmail.com",
      ownedBy: "David Da Silva",
      street: "8 West St.",
      created: "9/9/2021",
      lastContacted: "9/9/2021",
    },
    {
      firstName: "Bob Merill",
      company: "Midwest Cleaning",
      title: "Chief of Cleaning",
      email: "bob@hotmail.com",
      ownedBy: "David Da Silva",
      street: "First St.",
      created: "7/7/2021",
      lastContacted: "7/7/2021",
    },
    {
      firstName: "David Dust",
      company: "Eastern Shipment",
      title: "",
      email: "david@outlook.com",
      ownedBy: "Self Serve",
      street: "Second St.",
      created: "6/6/2021",
      lastContacted: "6/6/2021",
    },
    {
      firstName: "Tom Ben",
      company: "Drone",
      title: "",
      email: "tom@gmail.com",
      ownedBy: "",
      street: "Waterpark St.",
      created: "8/8/2021",
      lastContacted: "8/8/2021",
    },
    {
      firstName: "Danny Den",
      company: "Dream Design",
      title: "Chief of Designer",
      email: "danny@gmail.com",
      ownedBy: "Self Serve",
      street: "8 East St.",
      created: "8/8/2021",
      lastContacted: "8/8/2021",
    },
    {
      firstName: "Mandeep Singh",
      company: "Eastern Engineering",
      title: "Chief of Staff",
      email: "mandeep@gmail.com",
      ownedBy: "David Da Silva",
      street: "8 East St.",
      created: "8/8/2021",
      lastContacted: "8/8/2021",
    },
    {
      firstName: "Harpid Singh",
      company: "Midwest Consultancy",
      title: "Chief of Engineer",
      email: "harpid@gmail.com",
      ownedBy: "David Da Silva",
      street: "8 West St.",
      created: "9/9/2021",
      lastContacted: "9/9/2021",
    },
    {
      firstName: "Bob Merill",
      company: "Midwest Cleaning",
      title: "Chief of Cleaning",
      email: "bob@hotmail.com",
      ownedBy: "David Da Silva",
      street: "First St.",
      created: "7/7/2021",
      lastContacted: "7/7/2021",
    },
    {
      firstName: "David Dust",
      company: "Eastern Shipment",
      title: "",
      email: "david@outlook.com",
      ownedBy: "Self Serve",
      street: "Second St.",
      created: "6/6/2021",
      lastContacted: "6/6/2021",
    },
    {
      firstName: "Tom Ben",
      company: "Drone",
      title: "",
      email: "tom@gmail.com",
      ownedBy: "",
      street: "Waterpark St.",
      created: "8/8/2021",
      lastContacted: "8/8/2021",
    },
    {
      firstName: "Danny Den",
      company: "Dream Design",
      title: "Chief of Designer",
      email: "danny@gmail.com",
      ownedBy: "Self Serve",
      street: "8 East St.",
      created: "8/8/2021",
      lastContacted: "8/8/2021",
    },
  ];

  return {
    sidebarItems,
    tableItems,
  };
})();

function getInitials(name) {
  return name
    .split(" ")
    .map((name) => name[0].toUpperCase())
    .join("");
}

var UIController = (function () {
  function createSidebarItem(sidebarItem, index) {
    var sidebarHTML = "<li class='divider'></li>";
    if (sidebarItem.label) {
      sidebarHTML = `<li class='sidebar__item ${index === 3 ? "sidebar__item--selected":""}'>
                <span class='sidebar__item__badge'>
                    ${
                      sidebarItem.badge > -1
                        ? "<span>" + sidebarItem.badge + "</span>"
                        : ""
                    }
                </span>
                <span class='material-icons sidebar__item__left-icon'>
                    ${sidebarItem.leftIcon}
                </span>
                <span class='sidebar__item__label'>
                    ${sidebarItem.label}
                </span>
                <span class='material-icons sidebar__item__right-icon'>
                    ${sidebarItem.rightIcon || ""}
                </span>
           </li>`;
    }
    return sidebarHTML;
  }
  function createTableItem(tableItem, index) {
    var initials = getInitials(tableItem.firstName);
    return `<tr data-id="${index}">
            <td>
                <input type="checkbox"/>
                <span class="material-icons">
                    star_outline
                </span>
            </td>
            <td><div class="avatar">${initials}</div></td>
            <td>${tableItem.firstName} <i data-feather="external-link"></i></td>
            <td>${tableItem.company}</td>
            <td>${tableItem.title || "-"}</td>
            <td>${tableItem.email}</td>
            <td>${tableItem.ownedBy || "-"}</td>
            <td>${tableItem.street}</td>
            <td>${tableItem.created}</td>
            <td>${tableItem.lastContacted}</td>
        </tr>`;
  }
  var drawer = document.getElementById("drawer");
  return {
    createSidebar(sidebarItems) {
      var sidebarHTML = "";
      for (var i = 0; i < sidebarItems.length; i++) {
        sidebarHTML += createSidebarItem(sidebarItems[i], i);
      }
      document.getElementById("sidebar__nav").innerHTML = sidebarHTML;
    },
    createTable(tableItems) {
      var tableHTML = "";
      for (var i = 0; i < tableItems.length; i++) {
        tableHTML += createTableItem(tableItems[i], i);
      }
      document.getElementById("table-data").innerHTML = tableHTML;
    },
    showDrawer(index) {
      drawer.classList.add("drawer--visible");
      var details = Model.tableItems[index];
      var initals = getInitials(details.firstName);
      const selectors = [
        ".drawer__user .avatar",
        ".drawer__user__name",
        ".drawer__user__company",
        ".drawer__detail__name",
        ".drawer__detail__company",
        ".drawer__detail__title",
        ".drawer__detail__email",
        ".drawer__detail__owner",
      ];
      const values = [
        initals,
        details.firstName,
        details.company,
        details.firstName,
        details.company,
        details.title || "Add Title",
        details.email,
        details.ownedBy || "Add Owner",
      ];

      for (let i = 0; i < selectors.length; i++) {
        var element = document.querySelector(selectors[i]);
        if (["Add Title", "Add Owner"].includes(values[i])) {
          element.classList.add("disabled");
        } else {
          element.classList.remove("disabled");
        }
        element.innerHTML = values[i];
      }
    },
    closeDrawer() {
      drawer.classList.remove("drawer--visible");
    },
  };
})();

var App = (function (Model, UIController) {
  function setupEventListener() {
    var tableBody = document.getElementById("table-data");
    var rows = tableBody.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
      rows[i].addEventListener("click", (ev) => {
        UIController.showDrawer(ev.currentTarget.getAttribute("data-id"));
      });
    }
    document
      .getElementById("close-drawer")
      .addEventListener("click", UIController.closeDrawer);
  }
  function initialize() {
    UIController.createSidebar(Model.sidebarItems);
    UIController.createTable(Model.tableItems);
    setupEventListener();
  }
  return {
    initialize,
  };
})(Model, UIController);

App.initialize();
