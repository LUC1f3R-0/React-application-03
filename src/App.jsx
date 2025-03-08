import { NavBar } from "./components/NavBar"
import { Card } from "./components/Card"


export const App = () => {
  return (
    <>
      <NavBar />
      <Card
        img={{
          src: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDIwNjJ8MHwxfGFsbHx8fHx8fHx8fDE3MjMyMzUwNjR8&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Mount Fuji"
        }}
        country="Japan"
        title="Mount Fuji"
        date={{
          onDate: "12 Jan, 2021",
          closeDate: "24 Jan, 2021"
        }}
        details="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />

      <Card
        img={{
          src: "https://muralsyourway.vtexassets.com/arquivos/ids/238520-825-auto?width=825&height=auto&aspect=true",
          alt: "Eiffel Tower in Paris"
        }}
        country="France"
        title="Eiffel Tower"
        date={{
          onDate: "1st March, 2023",
          closeDate: "31st March, 2023"
        }}
        details="The Eiffel Tower is one of the most recognizable structures in the world. It stands at 330 meters (1,083 feet) and was completed in 1889 for the Exposition Universally (World’s Fair) to celebrate the 100th anniversary of the French Revolution. It attracts millions of visitors annually and offers panoramic views of Paris."
      />

      <Card
        img={{
          src: "https://static.vecteezy.com/system/resources/previews/033/863/522/large_2x/great-wall-of-china-at-sunrise-panoramic-view-of-china-the-great-wall-of-china-in-the-mist-lying-long-surrealist-view-from-dronegraphy-8k-ai-generated-free-photo.jpg",
          alt: "Great Wall of China"
        }}
        country="China"
        title="Great Wall of China"
        date={{
          onDate: "15th April, 2023",
          closeDate: "30th April, 2023"
        }}
        details="Stretching over 13,000 miles, the Great Wall of China is a series of fortifications made of various materials. It was originally built to protect Chinese states from invasions but is now considered one of the most incredible architectural achievements in history. The wall’s construction began in the 7th century BC and continued until the 16th century."
      />

      <Card
        img={{
          src: "http://1.bp.blogspot.com/-3mUa4Z5ria0/ToRV3GwN0GI/AAAAAAAAAQ8/kA71S1kIesE/s1600/Taj+Mahal.jpg",
          alt: "Taj Mahal in India"
        }}
        country="India"
        title="Taj Mahal"
        date={{
          onDate: "1st June, 2023",
          closeDate: "15th June, 2023"
        }}
        details="The Taj Mahal is a white marble mausoleum located in Agra, India. It was built between 1632 and 1653 by the Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is considered one of the Seven Wonders of the World and is a symbol of love and loss. The Taj Mahal attracts millions of visitors each year."
      />

      <Card
        img={{
          src: "https://media.gettyimages.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?b=1&s=170667a&w=0&k=20&c=pV6pleAH30v-wOZxCpeRZ4kVGnd6-Ycqs_POyUC_1Jo=",
          alt: "Colosseum in Rome"
        }}
        country="Italy"
        title="Colosseum"
        date={{
          onDate: "10th August, 2023",
          closeDate: "20th August, 2023"
        }}
        details="The Colosseum, also known as the Flavian Amphitheatre, is a massive stone arena located in the center of Rome, Italy. It was used for gladiatorial contests and public spectacles in ancient Rome. Construction began in AD 70 and was completed in AD 80. Today, the Colosseum is one of Italy’s most famous tourist attractions and an iconic symbol of the Roman Empire."
      />

    </>
  )
}