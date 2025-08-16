import { Shield, FileText, AlertTriangle, Users, ArrowRight, CheckCircle, Lock, Phone, Info, UserCheck, Scale, Heart, TrendingUp, Star, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCallout, AlertCalloutTitle, AlertCalloutDescription } from "@/components/ui/alert-callout";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppFooter } from "@/components/layout/AppFooter";
import { BackgroundSlideshow } from "@/components/ui/background-slideshow";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Hero Section with Background Slideshow */}
      <section className="relative py-20 px-4">
        <BackgroundSlideshow />
        <AppHeader />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              <Heart className="h-4 w-4 text-primary" />
              <span>ไถ่บาป • เริ่มต้นใหม่ • มีความหวัง</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              ใจเราเข้าใจ<br />
              <span className="text-primary">ความผิดพลาด</span><br />
              ไม่ใช่จุดจบ
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow">
              หากคุณเคยเป็นเหยื่อหลอกลวงหรือใช้บัญชีผิดกฎหมายโดยไม่รู้ตัว<br />
              เราพร้อมช่วยคุณไถ่บาปและเริ่มต้นใหม่อย่างปลอดภัย
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Button size="lg" className="shadow-xl text-lg px-8 py-6" asChild>
                <Link to="/assessment">
                  <FileText className="mr-2 h-5 w-5" />
                  ประเมินสถานการณ์ของฉัน
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/90 backdrop-blur-sm shadow-xl border-white/50 text-lg px-8 py-6" asChild>
                <Link to="/login">
                  <Shield className="mr-2 h-5 w-5" />
                  เข้าสู่ระบบไถ่บาป
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="flex-1">
        {/* Success Stories Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-background via-background/50 to-accent/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Star className="h-4 w-4" />
                <span>เรื่องราวแห่งความหวัง</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                คนที่เคยเจ็บปวด<br />วันนี้ได้เริ่มต้นใหม่
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                ทุกคนสมควรได้รับโอกาสที่สอง เราได้ช่วยเหลือผู้คนมากมายให้หลุดพ้นจากปัญหาและเริ่มต้นชีวิทใหม่
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/90 backdrop-blur-sm border-white/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">คุณ A</p>
                      <p className="text-sm text-muted-foreground">นักศึกษา มหาวิทยาลัย</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic">
                    "ตอนแรกกลัวมาก คิดว่าชีวิตจบแล้ว แต่ทีมงานที่นี่ช่วยผมผ่านช่วงเวลายากลำบากไปได้ วันนี้ผมกลับมาเรียนต่อได้แล้ว"
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-white/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <p className="font-semibold">คุณ B</p>
                      <p className="text-sm text-muted-foreground">พ่อบ้าน แม่บ้าน</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic">
                    "หลังจากมาไถ่บาปที่นี่ ดิฉันรู้สึกโล่งใจมาก ไม่ต้องกลัวตำรวจอีกต่อไป และได้เรียนรู้วิธีป้องกันตัวเองอีกด้วย"
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-white/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-warning" />
                    </div>
                    <div>
                      <p className="font-semibold">คุณ C</p>
                      <p className="text-sm text-muted-foreground">พนักงานบริษัท</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic">
                    "ผมไม่รู้ว่าบัญชีถูกใช้เป็นบัญชีม้า พอมาแจ้งที่นี่ ทุกอย่างได้รับการจัดการอย่างเป็นระบบ ทำให้รู้สึกปลอดภัย"
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-destructive mb-2">2.3M+</div>
                <p className="text-sm text-muted-foreground">บัญชีม้าในไทย</p>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-warning mb-2">฿89B</div>
                <p className="text-sm text-muted-foreground">ความเสียหายต่อปี</p>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-success mb-2">15,847</div>
                <p className="text-sm text-muted-foreground">คนที่ขอไถ่บาป</p>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">94%</div>
                <p className="text-sm text-muted-foreground">อัตราสำเร็จ</p>
              </div>
            </div>
          </div>
        </section>

        {/* Information Tabs Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ทำความเข้าใจเรื่องบัญชีม้า
              </h2>
              <p className="text-lg text-muted-foreground">
                ข้อมูลสำคัญที่คุณควรรู้เพื่อปกป้องตัวเองและครอบครัว
              </p>
            </div>

            <Tabs defaultValue="what" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="what" className="flex items-center space-x-2">
                  <Info className="h-4 w-4" />
                  <span className="hidden sm:inline">บัญชีม้าคืออะไร</span>
                  <span className="sm:hidden">คืออะไร</span>
                </TabsTrigger>
                <TabsTrigger value="warning" className="flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="hidden sm:inline">สัญญาณเตือน</span>
                  <span className="sm:hidden">เตือน</span>
                </TabsTrigger>
                <TabsTrigger value="legal" className="flex items-center space-x-2">
                  <Scale className="h-4 w-4" />
                  <span className="hidden sm:inline">ผลทางกฎหมาย</span>
                  <span className="sm:hidden">กฎหมาย</span>
                </TabsTrigger>
                <TabsTrigger value="help" className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span className="hidden sm:inline">วิธีการช่วยเหลือ</span>
                  <span className="sm:hidden">ช่วยเหลือ</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="what" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">บัญชีม้าคือบัญชีที่ถูกใช้ในทางผิด</h3>
                    <p className="text-muted-foreground mb-4">
                      บัญชีม้าคือบัญชีธนาคารที่มิจฉาชีพนำไปใช้ในการฟอกเงิน รับเงินจากการทุจริต หรือธุรกรรมผิดกฎหมายอื่นๆ โดยเจ้าของบัญชีอาจไม่รู้ตัวหรือถูกหลอกให้ร่วมมือ
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">การฟอกเงิน</Badge>
                        <Badge variant="outline">การโอนเงินผิดกฎหมาย</Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">การหลอกลวง</Badge>
                        <Badge variant="outline">การค้ายาเสพติด</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="warning" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">สัญญาณเตือนที่ควรระวัง</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-warning mt-1" />
                        <p>มีคนแปลกหน้าติดต่อเสนองานรายได้ดีผ่านโซเชียลมีเดีย</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-warning mt-1" />
                        <p>ขอให้เปิดบัญชีใหม่หรือให้ยืมบัตร ATM เพื่อรับเงิน</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-warning mt-1" />
                        <p>มีเงินแปลกหน้าเข้าบัญชีแล้วขอให้ถอนและโอนต่อ</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-warning mt-1" />
                        <p>ถูกข่มขู่หรือกดดันให้ร่วมมือในเรื่องการเงิน</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="legal" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">ผลกระทบทางกฎหมายที่อาจเกิดขึ้น</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-destructive/10 rounded-lg">
                        <h4 className="font-semibold text-destructive mb-2">โทษทางอาญา</h4>
                        <p className="text-sm">จำคุกได้สูงสุด 10 ปี และ/หรือปรับสูงสุด 200,000 บาท</p>
                      </div>
                      <div className="p-4 bg-warning/10 rounded-lg">
                        <h4 className="font-semibold text-warning mb-2">ผลกระทบทางการเงิน</h4>
                        <p className="text-sm">บัญชีถูกระงับ ขึ้นบัญชีดำ ไม่สามารถใช้บริการทางการเงินได้</p>
                      </div>
                      <div className="p-4 bg-info/10 rounded-lg">
                        <h4 className="font-semibold text-info mb-2">ผลกระทบต่อการใช้ชีวิต</h4>
                        <p className="text-sm">กระทบต่อการกู้เงิน การสมัครงาน และความน่าเชื่อถือในสังคม</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="help" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">เราช่วยคุณได้อย่างไร</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                          <span className="text-sm font-bold text-primary">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">ประเมินสถานการณ์</h4>
                          <p className="text-sm text-muted-foreground">ทำแบบประเมินเพื่อเข้าใจระดับความเสี่ยงของคุณ</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                          <span className="text-sm font-bold text-primary">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">ยื่นคำร้องปลอดภัย</h4>
                          <p className="text-sm text-muted-foreground">กรอกข้อมูลและแนบหลักฐานผ่านระบบเข้ารหัส</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                          <span className="text-sm font-bold text-primary">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">ประสานหน่วยงาน</h4>
                          <p className="text-sm text-muted-foreground">เราจะประสานกับธนาคารและหน่วยงานที่เกี่ยวข้องให้คุณ</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                          <span className="text-sm font-bold text-primary">4</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">ติดตามสถานะ</h4>
                          <p className="text-sm text-muted-foreground">ติดตามความคืบหน้าผ่านระบบออนไลน์แบบเรียลไทม์</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>

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