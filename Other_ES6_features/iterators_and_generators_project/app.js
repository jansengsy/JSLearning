const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lf: 'female',
    loc: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg',
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lf: 'male',
    loc: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg',
  },
  {
    name: 'William Johnson',
    age: 32,
    gender: 'male',
    lf: 'male',
    loc: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/69.jpg',
  },
];

const profiles = profileIterator(data);

// Next event
document.getElementById('next').addEventListener('click', nextProfile);
nextProfile();

// Next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Looking for: ${currentProfile.lf}</li>
        <li class="list-group-item">Location: ${currentProfile.loc}</li>
      </ul>
    `;
    document.getElementById('imageDisplay').innerHTML = `
      <img src="${currentProfile.image}" class="img-rounded">
    `;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
