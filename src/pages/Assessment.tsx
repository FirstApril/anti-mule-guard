import { useState } from "react";
import { FileText, AlertTriangle, CheckCircle, ArrowLeft, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { AlertCallout, AlertCalloutTitle, AlertCalloutDescription } from "@/components/ui/alert-callout";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppFooter } from "@/components/layout/AppFooter";
import { Link } from "react-router-dom";

interface Question {
  id: string;
  text: string;
  type: "likert" | "yesno";
  weight: number;
}

const questions: Question[] = [
  {
    id: "q1",
    text: "ฉันเคยให้ข้อมูลบัญชี/บัตร ATM แก่บุคคลออนไลน์ที่ไม่รู้จัก",
    type: "yesno",
    weight: 3
  },
  {
    id: "q2", 
    text: "ฉันเคยถูกขอให้เปิดบัญชีใหม่เพื่อรับเงินจากงาน/โอกาสออนไลน์",
    type: "yesno",
    weight: 3
  },
  {
    id: "q3",
    text: "มีเงินแปลกหน้าเข้าบัญชีฉันโดยที่ฉันไม่ทราบแหล่งที่มา",
    type: "likert",
    weight: 2
  },
  {
    id: "q4",
    text: "ฉันเคยถูกขอให้ถอนเงินและโอนต่อไปยังบัญชีอื่น",
    type: "likert",
    weight: 3
  },
  {
    id: "q5",
    text: "มีคนแปลกหน้าติดต่อฉันผ่านโซเชียลมีเดียเสนองานรายได้ดี",
    type: "likert",
    weight: 2
  },
  {
    id: "q6",
    text: "ฉันเคยให้คนอื่นควบคุม/เก็บบัตร ATM หรือรหัสผ่านของฉัน",
    type: "yesno",
    weight: 3
  },
  {
    id: "q7",
    text: "ฉันถูกข่มขู่หรือกดดันให้ร่วมมือในเรื่องการเงิน",
    type: "yesno",
    weight: 3
  },
  {
    id: "q8",
    text: "บัญชีของฉันมีการใช้งานผิดปกติหรือถูกระงับโดยธนาคาร",
    type: "likert",
    weight: 2
  }
];

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<{ score: number; level: string; description: string } | null>(null);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: parseInt(value)
    }));
  };

  const nextQuestion = () => {
    // Allow moving to next question even without answer - don't block users
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResult = () => {
    let totalScore = 0;
    let maxScore = 0;

    questions.forEach(question => {
      const answer = answers[question.id] || 0;
      const maxAnswer = question.type === "yesno" ? 1 : 5;
      totalScore += answer * question.weight;
      maxScore += maxAnswer * question.weight;
    });

    const percentage = (totalScore / maxScore) * 100;
    
    let level: string;
    let description: string;

    if (percentage <= 30) {
      level = "ต่ำ";
      description = "จากการประเมิน คุณมีความเสี่ยงในระดับต่ำ แต่ควรระมัดระวังและติดตามข่าวสารเกี่ยวกับการหลอกลวงทางการเงิน";
    } else if (percentage <= 60) {
      level = "ปานกลาง";
      description = "คุณมีความเสี่ยงในระดับปานกลาง ควรตรวจสอบบัญชีและธุรกรรมอย่างสม่ำเสมอ หากมีข้อสงสัยให้ติดต่อธนาคาร";
    } else {
      level = "สูง";
      description = "คุณมีความเสี่ยงในระดับสูง แนะนำให้ดำเนินการยื่นคำร้องยุติการเป็นบัญชีม้าทันที และติดต่อธนาคารเพื่อตรวจสอบบัญชี";
    }

    setResult({ score: Math.round(percentage), level, description });
    setShowResult(true);
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setResult(null);
  };

  if (showResult && result) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <AppHeader />
        
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ผลการประเมินความเสี่ยง
            </h1>
          </div>

          <Card className="mb-8">
            <CardHeader className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4 ${
                result.level === "สูง" ? "bg-destructive" : 
                result.level === "ปานกลาง" ? "bg-warning" : "bg-success"
              }`}>
                {result.level === "สูง" ? (
                  <AlertTriangle className="h-8 w-8 text-white" />
                ) : result.level === "ปานกลาง" ? (
                  <FileText className="h-8 w-8 text-white" />
                ) : (
                  <CheckCircle className="h-8 w-8 text-white" />
                )}
              </div>
              <CardTitle className="text-2xl">ระดับความเสี่ยง: {result.level}</CardTitle>
              <CardDescription className="text-lg">คะแนน: {result.score}/100</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Progress value={result.score} className="w-full" />
              <p className="text-center text-gray-700 leading-relaxed">
                {result.description}
              </p>
            </CardContent>
          </Card>

          {result.level === "สูง" && (
            <AlertCallout variant="warning" className="mb-8">
              <AlertCalloutTitle>แนะนำให้ดำเนินการทันที</AlertCalloutTitle>
              <AlertCalloutDescription>
                เนื่องจากคุณมีความเสี่ยงสูง เราแนะนำให้เข้าสู่ระบบและยื่นคำร้องยุติการเป็นบัญชีม้าเพื่อความปลอดภัยของคุณ
              </AlertCalloutDescription>
            </AlertCallout>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={resetAssessment} variant="outline">
              <ArrowLeft className="mr-2 h-5 w-5" />
              ทำแบบประเมินใหม่
            </Button>
            {result.level !== "ต่ำ" && (
              <Button size="lg" asChild>
                <Link to="/login">
                  <FileText className="mr-2 h-5 w-5" />
                  เข้าสู่ระบบเพื่อยื่นคำร้อง
                </Link>
              </Button>
            )}
          </div>
        </div>

        <AppFooter />
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <AppHeader />
      
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            แบบประเมินความเสี่ยงบัญชีม้า
          </h1>
          <p className="text-xl text-gray-600">
            ข้อ {currentQuestion + 1} จาก {questions.length}
          </p>
        </div>

        <div className="mb-8">
          <Progress value={progress} className="w-full" />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">{question.text}</CardTitle>
            <CardDescription>
              {question.type === "yesno" ? "เลือกใช่ หรือ ไม่ใช่" : "เลือกระดับที่ตรงกับสถานการณ์ของคุณ"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={answers[question.id]?.toString() || ""}
              onValueChange={(value) => handleAnswer(question.id, value)}
              className="space-y-4"
            >
              {question.type === "yesno" ? (
                <>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="0" id="no" />
                    <Label htmlFor="no" className="text-lg">ไม่ใช่</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="yes" />
                    <Label htmlFor="yes" className="text-lg">ใช่</Label>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="never" />
                    <Label htmlFor="never" className="text-lg">ไม่เคยเลย</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="rarely" />
                    <Label htmlFor="rarely" className="text-lg">นานๆ ครั้ง</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="sometimes" />
                    <Label htmlFor="sometimes" className="text-lg">บางครั้ง</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="often" />
                    <Label htmlFor="often" className="text-lg">บ่อยครั้ง</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5" id="always" />
                    <Label htmlFor="always" className="text-lg">เกิดขึ้นแล้ว/กำลังเกิดขึ้น</Label>
                  </div>
                </>
              )}
            </RadioGroup>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {currentQuestion === 0 ? (
              <Button variant="outline" asChild>
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  หน้าแรก
                </Link>
              </Button>
            ) : (
              <Button variant="outline" onClick={prevQuestion}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                ก่อนหน้า
              </Button>
            )}
            
            {currentQuestion > 0 && (
              <Button variant="ghost" asChild>
                <Link to="/">
                  <Home className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
          
          <Button onClick={nextQuestion}>
            {currentQuestion === questions.length - 1 ? "ดูผลลัพธ์" : "ถัดไป"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <AppFooter />
    </div>
  );
};

export default Assessment;