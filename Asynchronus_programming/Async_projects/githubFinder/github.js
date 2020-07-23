class Git {
  constructor() {
    this.client_id = '012367e30707408222e6';
    this.client_secret = 'cd474367229d041883dc6456a09b5f10af83efd4';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    // Get user profile
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();

    // Get user repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repos = await reposResponse.json();

    return {
      profile,
      repos,
    };
  }
}
