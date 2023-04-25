import { galleryApi } from "@qulisoft-test-task/data-gallery-api";
import { useState } from "react";
import { PhotoGrid } from "./photo-grid";

export const GalleryScreen = () => {
  const [page, setPage] = useState(1);
  const { isLoading, isError, data, isFetching } =
    galleryApi.useGetGalleryPhotosQuery(page);

  const onEndReached = () => {
    if (!isLoading && !isFetching) {
      setPage((page) => page + 1);
    }
  };

  return (
    <PhotoGrid
      isLoading={isLoading || isFetching}
      isError={isError}
      data={data}
      onEndReached={onEndReached}
    />
  );
};
