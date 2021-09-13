import Head from "next/head";
import MainLayout from "../components/Layouts/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import CastInfo from "../components/UI/CastInfo/CastInfo";
import MediaRow from "../components/UI/MediaRow/MediaRow";

export default function HomeView() {
  return (
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title="More Like This" type="small-v" />
      <CastInfo />
    </MainLayout>
  );
}
