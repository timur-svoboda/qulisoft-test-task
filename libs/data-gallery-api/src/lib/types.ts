export type GetGalleryPhotosArgs = number;

export type GetGalleryPhotosResult = Array<{
  id: string;
  description?: string;
  user: {
    username: string;
    links: {
      html: string;
    };
  };
  urls: {
    small: string;
  };
}>;

export type GetFullPhotoArgs = string;

export type GetFullPhotoResult = {
  description: string;
  width: number;
  height: number;
  urls: {
    full: string;
  };
};