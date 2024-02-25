import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getQuestions } from '@/sanity/actions'

export const revalidate = 900;

const Questions = async () => {
  const questions = await getQuestions();
  // console.log(questions)

  return (
    <section className="w-full">
      <h2 className="text-4xl md:text-5xl py-4 font-bold text-red text-center">Have Any Questions?</h2>
      <div className="m-auto py-10 w-[60%]">
        {questions.map((question: any) => (
          <QuestionItem 
            key={question._id}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </div>
    </section>
  )
}
type QuestionItem = {
  question: string;
  answer: string
}

const QuestionItem = ({ question, answer }: QuestionItem) => {
  return (
    <Accordion type="single" collapsible >
      <AccordionItem value="item">
        <AccordionTrigger className="pb-4">{question}</AccordionTrigger>
        <AccordionContent>
          {answer}
        </AccordionContent>
      </AccordionItem>
      </Accordion>
  )
}

export default Questions