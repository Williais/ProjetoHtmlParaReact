import "./styles.css";

import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/listItem";

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends"
  },
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant"
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft"
  },
  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT"
  }
];
const channelListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito"
  },
  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl:
      "https://yt3.googleusercontent.com/ytc/AOPolaRn_aNS1SbQ0PUk-9KAxRLGgSkTSsNm80C7zmAbdg=s900-c-k-c0x00ffffff-no-rj",
    alt: "Imagem de Alanzoka"
  },
  {
    url: "https://www.twitch.tv/cellbit",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-300x300.png",
    alt: "Imagem de Cellbit"
  }
];
const socialListData = [
  {
    url: "https://www.instagram.com/maykbrito",
    imageUrl: "/assets/instagram.svg",
    alt: "Instagram do Mayk Brito"
  },
  {
    url: "https://www.twitch.com/maykbrito",
    imageUrl: "/assets/twitch.svg",
    alt: "twitch do Mayk Brito"
  },
  {
    url: "https://www.youtube.com/maykbrito",
    imageUrl: "/assets/youtube.svg",
    alt: "youtube do Mayk Brito"
  },
  {
    url: "https://www.twitter.com/maykbrito",
    imageUrl: "/assets/twitter.svg",
    alt: "twitter do Mayk Brito"
  }
];

export default function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {gamesListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Canais e streamers"
          subtitle="Lista de canais e transmissões que eu não perco"
          className="channel-list"
        >
          {channelListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}
