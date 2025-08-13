import { useState } from "react";
import { Shield, Lock, ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCallout, AlertCalloutTitle, AlertCalloutDescription } from "@/components/ui/alert-callout";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppFooter } from "@/components/layout/AppFooter";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleBankLogin = async () => {
    setIsLoading(true);
    
    // Simulate bank authentication process
    setTimeout(() => {
      // Mock successful authentication
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userProfile', JSON.stringify({
        name: 'สมชาย ใจดี',
        nationalId: '1234567890123',
        phone: '081-234-5678',
        email: 'somchai@example.com'
      }));
      
      setIsLoading(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <AppHeader />
      
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            เข้าสู่ระบบอย่างปลอดภัย
          </h1>
          <p className="text-xl text-gray-600">
            ยืนยันตัวตนผ่านธนาคารหรือ NDID เพื่อความปลอดภัยสูงสุด
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle>ธนาคาร / NDID</CardTitle>
              <CardDescription>
                เข้าสู่ระบบผ่านธนาคารที่คุณมีบัญชีหรือระบบ NDID
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={handleBankLogin}
                disabled={isLoading}
                className="w-full"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    กำลังเชื่อมต่อ...
                  </>
                ) : (
                  <>
                    <Lock className="mr-2 h-4 w-4" />
                    เข้าสู่ระบบด้วยธนาคาร
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <CardTitle>ความปลอดภัยของข้อมูล</CardTitle>
              <CardDescription>
                ข้อมูลทั้งหมดจะถูกเข้ารหัสและเก็บรักษาอย่างปลอดภัย
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>เข้ารหัสข้อมูลส่วนบุคคล</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>บันทึกกิจกรรมทั้งหมด</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>ปฏิบัติตามกฎหมายคุ้มครองข้อมูล</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <AlertCallout variant="info" className="mb-8">
          <AlertCalloutTitle>สำหรับผู้มีสัญชาติไทยเท่านั้น</AlertCalloutTitle>
          <AlertCalloutDescription>
            ระบบนี้รองรับเฉพาะผู้ที่มีสัญชาติไทยเท่านั้น 
            หากคุณไม่ใช่คนไทย โปรดติดต่อสถานทูตหรือหน่วยงานที่เกี่ยวข้องในประเทศของคุณ
          </AlertCalloutDescription>
        </AlertCallout>

        <AlertCallout variant="warning" className="mb-8">
          <AlertCalloutTitle>ข้อมูลสำคัญ</AlertCalloutTitle>
          <AlertCalloutDescription>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>เราจะไม่เก็บข้อมูลบัญชีธนาคารหรือรหัสผ่านของคุณ</li>
              <li>การส่งข้อมูลไปยังหน่วยงานต้องได้รับความยินยอมจากคุณเท่านั้น</li>
              <li>คุณสามารถขอลบข้อมูลหรือถอนความยินยอมได้ตลอดเวลา</li>
              <li>หากมีข้อสงสัย โปรดติดต่อ 1111</li>
            </ul>
          </AlertCalloutDescription>
        </AlertCallout>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            ยังไม่พร้อมที่จะเข้าสู่ระบบ?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link to="/assessment">
                ทำแบบประเมินความเสี่ยงก่อน
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                กลับหน้าแรก
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
};

export default Login;