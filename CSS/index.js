$(document).ready(() => {
  const Sun = $(".Extention-head #Sun");
  const Moon = $(".Extention-head #Moon");
  Moon.hide();

  // Function to update nav item clickability
  function updateNavState() {
    const anySwitchChecked = $(".switch input:checked").length > 0;
    const $activeTab = $('.nav-all .border:contains("Active")');
    const $inactiveTab = $('.nav-all .border:contains("Inactive")');

    if (anySwitchChecked) {
      // Enable clicking
      $activeTab.css({
        "pointer-events": "auto",
        opacity: "1",
        cursor: "pointer",
      });
      $inactiveTab.css({
        "pointer-events": "auto",
        opacity: "1",
        cursor: "pointer",
      });
    } else {
      // Disable clicking
      $activeTab.css({
        "pointer-events": "none",
        opacity: "0.5",
        cursor: "not-allowed",
      });
      $inactiveTab.css({
        "pointer-events": "none",
        opacity: "0.5",
        cursor: "not-allowed",
      });
    }
  }

  // Initial check on page load
  updateNavState();

  Sun.click(() => {
    Sun.hide();
    Moon.show();
    $("body").css("backgroundColor", "hsl(217, 61%, 90%)");
    $(".Extention-head").css("backgroundColor", "hsl(200, 60%, 99%)");
    $(".border")
      .addClass("borderColor")
      .css("backgroundColor", "hsl(200, 60%, 99%)")
      .css("color", "hsl(227, 75%, 14%)");
    $(".nav-list p").css("color", "hsl(227, 75%, 14%)");
    $(".extention").css("backgroundColor", "hsl(200, 60%, 99%)");
    $("h3").css("color", "hsl(227, 75%, 14%)");
    $(".writeUp p").css("color", "hsl(226, 25%, 17%)");
    $("button").css("color", "hsl(227, 75%, 14%)");
  });

  Moon.click(() => {
    Sun.show();
    Moon.hide();
    $("body").css("backgroundColor", "hsl(227, 75%, 14%)");
    $(".Extention-head").css("backgroundColor", "hsl(225, 23%, 24%)");
    $(".border")
      .removeClass("borderColor")
      .css("backgroundColor", "hsl(226, 11%, 37%)")
      .css("color", "hsl(200, 60%, 99%)");
    $(".nav-list p").css("color", "hsl(200, 60%, 99%)");
    $(".extention").css("backgroundColor", "hsl(226, 25%, 17%)");
    $("h3").css("color", "hsl(200, 60%, 99%)");
    $(".writeUp p").css("color", "hsl(0, 0%, 78%)");
    $("button").css("color", "hsl(0, 0%, 78%)");
  });

  // Show only active extensions
  $('.nav-all .border:contains("Active")').click(function () {
    $(".extention").hide();
    $(".extention").has(".switch input:checked").show();
    $(".nav-all .border").css("background-color", "hsl(226, 11%, 37%)");
    $(this).css("background-color", "hsl(3, 86%, 64%)");
  });

  // Show all extensions
  $('.nav-all .border:contains("All")').click(function () {
    $(".extention").show();
    $(".nav-all .border").css("background-color", "hsl(226, 11%, 37%)");
    $(this).css("background-color", "hsl(3, 86%, 64%)");
  });

  // Show only inactive extensions
  $('.nav-all .border:contains("Inactive")').click(function () {
    $(".extention").hide();
    $(".extention").has(".switch input:not(:checked)").show();
    $(".nav-all .border").css("background-color", "hsl(226, 11%, 37%)");
    $(this).css("background-color", "hsl(3, 86%, 64%)");
  });

  // Switch toggle feedback and nav update
  $(".switch input").on("change", function () {
    const $switch = $(this);
    const $extension = $switch.closest(".extention");
    const extensionName = $extension.find("h3").text();

    if ($switch.is(":checked")) {
      console.log(`${extensionName} enabled`);
    } else {
      console.log(`${extensionName} disabled`);
    }
    updateNavState(); // Update nav state whenever a switch changes
  });

  // Remove extension functionality
  $(".change-section button").click(function () {
    const $extension = $(this).closest(".extention");
    const extensionName = $extension.find("h3").text();

    if (confirm(`Are you sure you want to remove ${extensionName}?`)) {
      $extension.remove();
      console.log(`${extensionName} has been removed`);
      updateNavState(); // Update nav state after removal
    }
  });
});
