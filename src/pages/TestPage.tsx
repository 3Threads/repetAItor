import React from 'react';
import {Header} from "../components/Header";
import {Container} from "react-bootstrap";
import MultipleChoiceQuestion from "../components/MultipleChoiceQuestion";
import FillInTheBlanksQuestion from "../components/FillInTheBlanksQuestion";


function TestPage() {
    return (
        <div>
            <Header/>
            <Container>
                <MultipleChoiceQuestion questionNumber={1} question={'What does Sandro want to be?'}
                                        choices={['A doctor', 'An actor', 'An economist']}/>
                <FillInTheBlanksQuestion questionNumber={5}
                                         splitter={'……'}
                                         questionPrompt={'Read the text and fill the gaps with the words given. Use each word only once. Two words are extra.'}
                                         questionText={"One of the world’s most geographically isolated countries, the Republic of Maldives, also called the Maldives, is situated in the\n" +
                                             "north-central Indian Ocean. It …… (1) of a group of about 1,200 small …… (2) and sandy beaches. The people who live in\n" +
                                             "the Maldives are often …… (3) Maldivians or Maldive Islanders. Due to its geographic …… (4) near the equator, the Maldives\n" +
                                             "enjoys exceptionally …… (5) temperatures practically throughout the whole year. The Maldives has the smallest population in\n" +
                                             "Asia. More than one-quarter of Maldivians live in the city Male. The official …… (6) of the Maldives is Dhivehi, which is believed\n" +
                                             "to originate from the Sri Lankan language Sinhala. Although Maldivians use Dhivehi for most of their daily communications, the\n" +
                                             "English language is becoming more and more …… (7) as the most common second language. The official religion of the Maldives\n" +
                                             "is Sunni Islam, and according to the Maldivian Constitution, only Muslims may be …… (8) of the country. In the early 1980s, the\n" +
                                             "Maldives was one of the world's 20 …… (9) countries because of its low-income; nowadays, it is a middle-income country where\n" +
                                             "only tourism and fishing are the major industries. Tourist agencies bring tourists to the country and take them directly to resorts\n" +
                                             "and private beaches. The tourists do not …… (10) with the local population who dislike alcoholic …… (11) and immodest\n" +
                                             "clothing. Scientists …… (12) that because of the global warming, the sea levels may rise and the islands may disappear completely."}
                                         options={['called', 'citizens', 'communicate', 'consists', 'drinks', 'guide', 'islands', 'landscapes', 'languages', 'location', 'poorest', 'popular', 'warm', 'worry']}/>


                <FillInTheBlanksQuestion questionNumber={6}
                                         questionPrompt={"Read the text and fill the gaps with one of the following: article, preposition, conjunction or relative\n" +
                                             "pronoun. Insert only ONE word. Do not copy the extra words from the text on the answer sheet."}
                                         questionText={"An invention is the discovery or creation of a new material, a new process or a new use of existing material. Inventions\n" +
                                             "almost always cause change. Sometimes great inventions are ideas that can change ….. (1) world. Many of the everyday\n" +
                                             "products which we use today were invented years ago. While some inventions were discovered accidentally, most of them\n" +
                                             "were the result ….. (2) hard work, continuous effort ….. (3) a great wish to try again. The invention of the radio has brought\n" +
                                             "distant places closer together, and the invention of the car has made it possible to travel long distances. An invention might\n" +
                                             "also be ….. (4) better way of doing something, ….. (5) example, a tool to make a job easier or some new farming method.\n" +
                                             "When looking for the examples of inventions ..... (6) changed the world, we should consider not just the item, but also the\n" +
                                             "progress it brought about. Many inventions, such as musical instruments ….. (7) sports equipment, have made our life more\n" +
                                             "comfortable and enjoyable. Although there are a lot of inventions, not every good idea leads ….. (8) immediate success.\n" +
                                             "The key to the success of the invention is to be in the right place ….. (9) the right time. It is believed that ….. (10) the 15th\n" +
                                             "century an Italian painter, Leonardo da Vinci, wrote down his idea for big iron chains ….. (11) would drive machines, …..\n" +
                                             "(12) unfortunately the technology to produce those chains didn’t exist then. This shows that even the greatest inventions\n" +
                                             "may be useless if they are ahead of their time."} options={[]} splitter={'…..'}/>
            </Container>
        </div>
    )
        ;
}

export default TestPage;
