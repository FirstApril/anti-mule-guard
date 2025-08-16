import { Shield, FileText, AlertTriangle, Users, ArrowRight, CheckCircle, Lock, Phone, Info, UserCheck, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCallout, AlertCalloutTitle, AlertCalloutDescription } from "@/components/ui/alert-callout";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppFooter } from "@/components/layout/AppFooter";
import { BackgroundSlideshow } from "@/components/ui/background-slideshow";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundSlideshow />
      <AppHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              <Shield className="h-4 w-4 text-primary" />
              <span>ปลอดภัย • เป็นความลับ • รัฐสนับสนุน</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              ยุติการเป็น<span className="text-primary">บัญชีม้า</span><br />
              เริ่มได้ที่นี่
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Button size="lg" className="shadow-lg" asChild>
                <Link to="/assessment">
                  <FileText className="mr-2 h-5 w-5" />
                  ประเมินความเสี่ยง
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/80 backdrop-blur-sm shadow-lg border-white/50" asChild>
                <Link to="/login">
                  <Shield className="mr-2 h-5 w-5" />
                  เข้าสู่ระบบ
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-white/50 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Info className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">บัญชีม้าคืออะไร?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  บัญชีที่ถูกใช้ในการฟอกเงินโดยเจ้าของไม่รู้ตัว
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-white/50 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  </div>
                  <CardTitle className="text-lg">สัญญาณเตือน</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  ตรวจสอบสถานการณ์ที่อาจทำให้เป็นเหยื่อ
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-white/50 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Scale className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">ผลกระทบทางกฎหมาย</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  โทษจำคุก ปรับ และแบล็กลิสต์ทางการเงิน
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-white/50 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">ยืนยันตัวตนปลอดภัย</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  เข้าสู่ระบบผ่านธนาคารหรือ NDID
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-white/50 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">ยื่นคำร้องเป็นทางการ</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  กรอกข้อมูลและแนบหลักฐานผ่านระบบเข้ารหัส
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-white/50 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Users className="h-5 w-5 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">ประสานหน่วยงาน</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  ส่งต่อข้อมูลไปยังธนาคารและหน่วยงานที่เกี่ยวข้อง
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alert Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <AlertCallout variant="warning" className="bg-white/90 backdrop-blur-sm border-white/50 shadow-lg">
            <AlertCalloutTitle>ข้อจำกัดความรับผิดชอบ</AlertCalloutTitle>
            <AlertCalloutDescription>
              ข้อมูลในเว็บไซต์นี้มีวัตถุประสงค์เพื่อการให้ข้อมูลทั่วไป ไม่ถือเป็นคำปรึกษาทางกฎหมาย 
              โปรดปรึกษาทนายความสำหรับคำแนะนำเฉพาะกรณีของคุณ
            </AlertCalloutDescription>
          </AlertCallout>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="bg-white/90 backdrop-blur-sm border-white/50 shadow-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              พร้อมเริ่มต้นแล้วหรือยัง?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              หากคุณเชื่อว่าบัญชีของคุณถูกใช้เป็นบัญชีม้า เริ่มต้นด้วยการประเมินความเสี่ยง
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg" asChild>
                <Link to="/assessment">
                  เริ่มประเมินความเสี่ยง
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/80 backdrop-blur-sm shadow-lg border-white/50" asChild>
                <Link to="/login">
                  <Phone className="mr-2 h-5 w-5" />
                  หรือโทร 1111
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <AppFooter />
    </div>
  );
};

export default Index;