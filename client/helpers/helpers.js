export const isBrowser = () => process.browser;

export const getCookie = (name) => {
  if (!process.browser) return;
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
};

export const isFileImage = (file) => {
  const acceptedImageTypes = ["image/gif", "image/jpeg", "image/png"];

  return file && acceptedImageTypes.includes(file["type"]);
};

export const deleteFile = async (fileId, token) => {
  await fetch(`${process.env.SERVER_URL}/upload/files/${fileId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getImageFormat = (formats, type) => {
  if (type === "large" && formats.large) {
    return formats.large.url;
  } else if (type === "medium" && formats.medium) {
    return formats.medium.url;
  } else if (type === "small" && formats.small) {
    return formats.small.url;
  } else if (type === "thumbnail" && formats.thumbnail) {
    return formats.thumbnail.url;
  } else {
    return "zby-maly-rozmiar-zdjecia";
  }
};

export const formatDate = (myDate) => {
  const date = new Date(myDate);
  const dateObj = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };

  return `${dateObj.day}.${dateObj.month}.${dateObj.year}`;
};
