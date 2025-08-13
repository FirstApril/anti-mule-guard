import { useState, useEffect } from "react";
import { FileText, Clock, CheckCircle, AlertTriangle, User, CreditCard, Upload, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { AlertCallout, AlertCalloutTitle, AlertCalloutDescription } from "@/components/ui/alert-callout";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppFooter } from "@/components/layout/AppFooter";
import { useNavigate, Link } from "react-router-dom";

interface Case {
  id: string;
  referenceCode: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  evidenceCount: number;
}

interface User {
  name: string;
  nationalId: string;
  phone: string;
  email: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    // Load user profile
    const userProfile = localStorage.getItem('userProfile');
    if (userProfile) {
      setUser(JSON.parse(userProfile));
    }

    // Mock case data
    setCases([
      {
        id: '1',
        referenceCode: 'AM2024-001234',
        status: 'IN_REVIEW',
        createdAt: '2024-01-15T10:30:00Z',
        updatedAt: '2024-01-16T14:20:00Z',
        description: 'ถูกชักชวนให้เปิดบัญชีเพื่อรับเงินจากงานออนไลน์',
        evidenceCount: 3
      }
    ]);
  }, [navigate]);

  const getStatusBadge = (status: string) => {
    const statusMap = {
      'SUBMITTED': { label: 'ส่งคำร้องแล้ว', variant: 'secondary' as const },
      'VERIFIED': { label: 'ตรวจสอบแล้ว', variant: 'default' as const },
      'FORWARDED_BANK': { label: 'ส่งต่อธนาคาร', variant: 'default' as const },
      'FORWARDED_POLICE': { label: 'ส่งต่อตำรวจ', variant: 'default' as const },
      'IN_REVIEW': { label: 'อยู่ระหว่างพิจารณา', variant: 'secondary' as const },
      'COMPLETED': { label: 'เสร็จสิ้น', variant: 'default' as const },
      'REJECTED': { label: 'ถูกปฏิเสธ', variant: 'destructive' as const }
    };

    const statusInfo = statusMap[status as keyof typeof statusMap] || { label: status, variant: 'secondary' as const };
    return <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>;
  };

  const getStatusProgress = (status: string) => {
    const progressMap = {
      'SUBMITTED': 20,
      'VERIFIED': 40,
      'FORWARDED_BANK': 60,
      'FORWARDED_POLICE': 70,
      'IN_REVIEW': 80,
      'COMPLETED': 100,
      'REJECTED': 0
    };
    return progressMap[status as keyof typeof progressMap] || 0;
  };

  if (!user) {
    return <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <AppHeader />
      
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            แดชบอร์ด
          </h1>
          <p className="text-xl text-gray-600">
            ยินดีต้อนรับ, {user.name}
          </p>
        </div>

        <Tabs defaultValue="cases" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="cases">คำร้องของฉัน</TabsTrigger>
            <TabsTrigger value="profile">ข้อมูลส่วนตัว</TabsTrigger>
            <TabsTrigger value="settings">การตั้งค่า</TabsTrigger>
          </TabsList>

          <TabsContent value="cases" className="space-y-6">
            {cases.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ยังไม่มีคำร้อง
                  </h3>
                  <p className="text-gray-600 mb-6">
                    คุณยังไม่ได้ยื่นคำร้องยุติการเป็นบัญชีม้า
                  </p>
                  <Button asChild>
                    <Link to="/confess">
                      <FileText className="mr-2 h-4 w-4" />
                      ยื่นคำร้องใหม่
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {cases.map((case_) => (
                  <Card key={case_.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            เลขอ้างอิง: {case_.referenceCode}
                            {getStatusBadge(case_.status)}
                          </CardTitle>
                          <CardDescription>
                            ยื่นเมื่อ: {new Date(case_.createdAt).toLocaleDateString('th-TH', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </CardDescription>
                        </div>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          ดูรายละเอียด
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">{case_.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>ความคืบหน้า</span>
                          <span>{getStatusProgress(case_.status)}%</span>
                        </div>
                        <Progress value={getStatusProgress(case_.status)} className="w-full" />
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Upload className="h-4 w-4 text-gray-400" />
                          <span>{case_.evidenceCount} หลักฐาน</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span>อัปเดตล่าสุด: {new Date(case_.updatedAt).toLocaleDateString('th-TH')}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card>
                  <CardContent className="text-center py-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      ต้องการยื่นคำร้องเพิ่มเติม?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      หากมีบัญชีอื่นที่ถูกใช้เป็นบัญชีม้า คุณสามารถยื่นคำร้องเพิ่มได้
                    </p>
                    <Button variant="outline" asChild>
                      <Link to="/confess">
                        <FileText className="mr-2 h-4 w-4" />
                        ยื่นคำร้องใหม่
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  ข้อมูลส่วนตัว
                </CardTitle>
                <CardDescription>
                  ข้อมูลที่ได้จากการยืนยันตัวตนผ่านธนาคาร
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">ชื่อ-นามสกุล</label>
                    <p className="text-lg">{user.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">เลขบัตรประชาชน</label>
                    <p className="text-lg font-mono">****-****-***{user.nationalId.slice(-2)}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">เบอร์โทรศัพท์</label>
                    <p className="text-lg">{user.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">อีเมล</label>
                    <p className="text-lg">{user.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  บัญชีธนาคารที่เชื่อมต่อ
                </CardTitle>
                <CardDescription>
                  บัญชีที่เชื่อมต่อเพื่อตรวจสอบธุรกรรม
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">ยังไม่มีบัญชีที่เชื่อมต่อ</p>
                  <Button variant="outline">
                    <CreditCard className="mr-2 h-4 w-4" />
                    เชื่อมต่อบัญชีธนาคาร
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>การตั้งค่าความเป็นส่วนตัว</CardTitle>
                <CardDescription>
                  จัดการความยินยอมและการแชร์ข้อมูล
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <AlertCallout variant="info">
                  <AlertCalloutTitle>การแชร์ข้อมูลปัจจุบัน</AlertCalloutTitle>
                  <AlertCalloutDescription>
                    คุณได้ให้ความยินยอมให้แชร์ข้อมูลกับธนาคารและหน่วยงานที่เกี่ยวข้องเพื่อการยุติบัญชีม้า
                  </AlertCalloutDescription>
                </AlertCallout>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    แชร์ข้อมูลกับธนาคาร (เปิดใช้งาน)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    แชร์ข้อมูลกับตำรวจ (เปิดใช้งาน)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
                    แชร์ข้อมูลกับหน่วยงานกลาง (ปิดใช้งาน)
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>การจัดการบัญชี</CardTitle>
                <CardDescription>
                  การออกจากระบบและลบข้อมูล
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    localStorage.removeItem('isAuthenticated');
                    localStorage.removeItem('userProfile');
                    navigate('/');
                  }}
                >
                  ออกจากระบบ
                </Button>
                <Button variant="destructive" className="w-full">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  ขอลบข้อมูลทั้งหมด
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <AppFooter />
    </div>
  );
};

export default Dashboard;