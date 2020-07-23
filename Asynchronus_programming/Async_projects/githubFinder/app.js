document.getElementById('searchUser').addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;
  const git = new Git();
  const ui = new UI();

  if (userText !== '') {
    git.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        ui.renderAlert('User not found', 'alert alert-danger');
      } else {
        ui.clearAlert();
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});
