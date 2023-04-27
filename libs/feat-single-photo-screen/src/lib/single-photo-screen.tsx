import { galleryApi } from "@qulisoft-test-task/data-gallery-api";
import { ScreenProps } from "./types";
import { Photo } from "./photo";
import { Message } from "@qulisoft-test-task/ui-message";

type SinglePhotoScreenProps = ScreenProps;

export const SinglePhotoScreen = (props: SinglePhotoScreenProps) => {
  const { id } = props.route.params;
  const { isError, data } = galleryApi.useGetFullPhotoQuery(id);

  if (isError) {
    return <Message>Oops, an error happened</Message>;
  }

  return <Photo photo={data} />;
};
