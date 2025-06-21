import QuestionForm from "@/components/QuestionForm";
import Particles from "@/components/magicui/particles";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function AskQuestionPage() {
  return (
    <TracingBeam className="container pl-6">
      <Particles
        className="fixed inset-0 h-full w-full"
        quantity={500}
        ease={100}
        color="#ffffff"
      />
      <div className="relative mx-auto px-4 pb-20 pt-36">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Ask a Question</h1>
          <p className="text-muted-foreground">
            Share your knowledge and help others in the community
          </p>
        </div>
        <QuestionForm />
      </div>
    </TracingBeam>
  );
}
