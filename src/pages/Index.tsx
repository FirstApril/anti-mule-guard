import { Shield, FileText, AlertTriangle, Users, ArrowRight, CheckCircle, Lock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCallout, AlertCalloutTitle, AlertCalloutDescription } from "@/components/ui/alert-callout";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppFooter } from "@/components/layout/AppFooter";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <AppHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>ปลอดภัย • เป็นความลับ • รัฐสนับสนุน</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              ยุติการเป็น<span className="text-primary">บัญชีม้า</span><br />
              เริ่มได้ที่นี่
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              หากคุณเพิ่งทราบว่าบัญชีถูกใช้โดยมิชอบ เราช่วยประสานกับธนาคารและหน่วยงานรัฐ
              โดยคำนึงถึงความปลอดภัยและสิทธิของคุณ
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/assessment">
                  <FileText className="mr-2 h-5 w-5" />
                  ทำแบบประเมินความเสี่ยง
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/login">
                  <Shield className="mr-2 h-5 w-5" />
                  เข้าสู่ระบบเพื่อยื่นขอยุติ
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <AlertCallout variant="warning" className="mb-8">
            <AlertCalloutTitle>ข้อจำกัดความรับผิดชอบ</AlertCalloutTitle>
            <AlertCalloutDescription>
              ข้อมูลในเว็บไซต์นี้มีวัตถุประสงค์เพื่อการให้ข้อมูลทั่วไป ไม่ถือเป็นคำปรึกษาทางกฎหมาย 
              โปรดปรึกษาทนายความสำหรับคำแนะนำเฉพาะกรณีของคุณ
            </AlertCalloutDescription>
          </AlertCallout>
        </div>
      </section>

      {/* What is Mule Account Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              บัญชีม้าคืออะไร?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ทำความเข้าใจเกี่ยวกับบัญชีม้า สัญญาณเตือน และผลกระทบทางกฎหมาย
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle>นิยามบัญชีม้า</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  บัญชีธนาคารที่ถูกใช้ในการแยกเงินหรือทำธุรกรรมการเงินที่ผิดกฎหมาย 
                  โดยเจ้าของบัญชีไม่รู้ตัวหรือถูกหลอกใช้
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle>วิธีการของมิจฉาชีพ</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  ชักชวนให้เปิดบัญชีใหม่ ขอยืมบัญชีเดิม เสนอรายได้ง่าย หรือใช้การข่มขู่ 
                  เพื่อให้ได้บัญชีมาใช้ในการฟอกเงิน
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle>ผลกระทบทางกฎหมาย</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  อาจถูกตั้งข้อหาฟอกเงิน มีโทษจำคุก ปรับ และแบล็กลิสต์ทางการเงิน 
                  แม้จะไม่รู้ตัวหรือถูกหลอก
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-16 px-4 bg-gradient-warm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              สัญญาณเตือนที่ควรระวัง
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              หากพบสถานการณ์เหล่านี้ คุณอาจตกเป็นเหยื่อบัญชีม้า
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "มีคนแปลกหน้าติดต่อผ่านโซเชียลมีเดีย เสนองานรายได้ดี",
              "ถูกขอให้เปิดบัญชีใหม่หรือให้ยืมบัญชีเดิม",
              "ได้รับเงินโอนเข้าบัญชีจากคนที่ไม่รู้จัก",
              "ถูกขอให้ถอนเงินและโอนต่อไปยังบัญชีอื่น",
              "มีคนควบคุมการใช้บัญชีหรือเก็บบัตร ATM",
              "ถูกข่มขู่หรือกดดันให้ร่วมมือ"
            ].map((warning, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0 h-6 w-6 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                </div>
                <p className="text-gray-700">{warning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              เราช่วยคุณอย่างไร?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              กระบวนการปลอดภัยและรักษาความลับ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">ยืนยันตัวตนปลอดภัย</h3>
              <p className="text-gray-600">
                เข้าสู่ระบบผ่านธนาคารหรือ NDID อย่างปลอดภัย
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <FileText className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">ยื่นคำร้องเป็นทางการ</h3>
              <p className="text-gray-600">
                กรอกข้อมูลและแนบหลักฐานผ่านระบบเข้ารหัส
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">ประสานหน่วยงาน</h3>
              <p className="text-gray-600">
                ส่งต่อข้อมูลไปยังธนาคารและหน่วยงานที่เกี่ยวข้อง
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            พร้อมเริ่มต้นแล้วหรือยัง?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            หากคุณเชื่อว่าบัญชีของคุณถูกใช้เป็นบัญชีม้า เริ่มต้นด้วยการประเมินความเสี่ยง
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/assessment">
                เริ่มประเมินความเสี่ยง
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-gray-600 text-gray-300 hover:bg-gray-800" asChild>
              <Link to="/login">
                <Phone className="mr-2 h-5 w-5" />
                หรือโทร 1111
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <AppFooter />
    </div>
  );
};

export default Index;