export const getUrls = () => JSON.parse(localStorage.getItem('urls') || '[]');

export const saveUrl = (urlObj) => {
  const urls = getUrls();
  urls.push(urlObj);
  localStorage.setItem('urls', JSON.stringify(urls));
};

export const updateUrl = (shortcode, updateFn) => {
  const urls = getUrls().map(u => 
    u.shortcode === shortcode ? updateFn(u) : u
  );
  localStorage.setItem('urls', JSON.stringify(urls));
};

export const getUrlByShortcode = (shortcode) => 
  getUrls().find(u => u.shortcode === shortcode);