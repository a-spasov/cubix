export function defineScreenSize() {
  let size = '';
  if(window.innerWidth < 600) {
    size = 'small';
  } else if ( window.innerWidth > 1000) {
    size = 'large';
  } else {
    size = 'medium';
  }

  return size;
}