const avatarImage = new URL('./images/avatar.jpg', import.meta.url);
const dombayImage = new URL('./images/dombay.jpg', import.meta.url);
const elbrusImage = new URL('./images/elbrus.jpg', import.meta.url);
const karachaevskImage = new URL('./images/karachaevsk.jpg', import.meta.url);
const closeIcon = new URL('./images/close-icon.svg', import.meta.url);
const deleteIcon = new URL('./images/delete-icon.svg', import.meta.url);
const likeActive = new URL('./images/like_active.svg', import.meta.url);
const like = new URL('./images/like.svg', import.meta.url);
const logo = new URL('./images/logo.svg', import.meta.url);
const vectorAdd = new URL('./images/vector-add.svg', import.meta.url);
const vectorEdit = new URL('./images/vector-edit.svg', import.meta.url);

const images = [
  { name: 'Avatar', image: avatarImage },
  { name: 'Dombay', image: dombayImage },
  { name: 'Elbrus', image: elbrusImage },
  { name: 'Karachaevsk', image: karachaevskImage },
  { name: 'Close-icon', image: closeIcon },
  { name: 'Delete-icon', image: deleteIcon },
  { name: 'Like_active', image: likeActive },
  { name: 'Like', image: like },
  { name: 'Logo', image: logo },
  { name: 'Vector-add', image: vectorAdd },
  { name: 'Vector-edit', image: vectorEdit }
];

import './pages/index.css';

import './components';