
export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 5 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 2) {
    return [1, 2, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 1) {
    return [1, 2, '...', totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage,
    '...',
    totalPages,
  ];
};

export const generateBreadCrumbs = (pathName: string) => {
    const pathArr = pathName.split('/');
    if(pathArr[1] == ''){
      return;
    } else {
      return pathArr.at(-1);
    }
}

export const hideFilters = (pathName: string) => {
  const path = pathName.split('/')[1];
  if(path == 'cart' || path == 'product') {
    return true;
  } else {
    return false;
  }
}

export const hideBreadCrumbs = (pathName: string) => {
  const path = pathName.split('/')[1];
  if(['', 'cart', 'search'].includes(path)) {
    return true;
  } else {
    return false;
  }
}