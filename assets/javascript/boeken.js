function openCenteredWindow() {
  // Get screen dimensions
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;

  // Set window dimensions
  var windowWidth = 900;
  var windowHeight = 609;

  // Calculate window position to center it
  var left = (screenWidth - windowWidth) / 2;
  var top = (screenHeight - windowHeight) / 2;

  // Open the window
  var newWindow = window.open(
      'https://form.jotform.com/240116064557048',
      'blank',
      'scrollbars=yes,toolbar=no,width=' + windowWidth + ',height=' + windowHeight + ',left=' + left + ',top=' + top
  );

  // Ensure the window is opened
  if (newWindow) {
      // Focus on the new window
      newWindow.focus();
  } else {
      // Handle cases where the window could not be opened (e.g., pop-up blocker)
      console.error('Failed to open window. Please ensure pop-ups are allowed for this website.');
  }
}
