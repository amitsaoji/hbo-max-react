import Head from "next/head";
import { useEffect } from "react";
import { useStateContext } from "../../components/HBOProvider";
import { useRouter } from "next/router";
import MainLayout from "../../components/Layouts/MainLayout";
import FeaturedMedia from "../../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../../components/UI/MediaRow/MediaRow";
import AuthCheck from "../../components/AuthCheck";
import LazyLoad from "react-lazyload";
import PlaceHolders from "../../components/UI/PlaceHolders/PlaceHolders";
import GenreNav from "../../components/UI/GenreNav/GenreNav";
import { shuffleArray } from "../../components/UI/utilities";
import axios from "axios";

export default function MediaTypePage(props) {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {}, []);

  return AuthCheck(
    <MainLayout>
      {/* <FeaturedMedia
        mediaUrl="https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=16"
        title="Mortal Kombat"
        location="In theaters and on HBO MAX. Streaming throughout May 23."
        linkUrl="/movie/460465"
        type="front"
      /> */}
      <GenreNav
        mediaType={props.query.mediaType}
        genresData={props.genresData}
      />
      <LazyLoad
        offset={-400}
        placeholder={<PlaceHolders title="Movies" type="large-v" />}
      >
        <MediaRow
          title="Movies"
          type="large-v"
          endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2021"
        />
      </LazyLoad>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  let genresData;
  let featuredData;
  try {
    genresData = await axios.get(
      `https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=35f10c27bb90f7965aa413322662125f&language=en-US`
    );
    featuredData = await axios.get(
      `https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2021&api_key=35f10c27bb90f7965aa413322662125f&language=en-US`
    );
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      genresData: genresData.data.genres,
      featuredData: shuffleArray(featuredData.data.results)[0],
      query: context.query
    }
  };
}
