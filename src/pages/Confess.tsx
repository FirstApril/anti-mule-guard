import { useState, useEffect } from "react";
import { Shield, User, CreditCard, FileText, CheckCircle, ArrowLeft, ArrowRight, Upload, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { AlertCallout, AlertCalloutTitle, AlertCalloutDescription } from "@/components/ui/alert-callout";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppFooter } from "@/components/layout/AppFooter";
import { useNavigate } from "react-router-dom";

interface FormData {
  // Step 1: Personal Info
  title: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  nationalId: string;
  phone: string;
  email: string;
  address: string;
  province: string;
  postalCode: string;
  occupation: string;

  // Step 2: Bank Info
  banks: string[];
  accountNumbers: Record<string, string>;
  suspectedStartDate: string;
  stillActive: boolean;
  
  // Step 3: Description & Evidence
  description: string;
  timeline: string;
  evidenceFiles: File[];
  
  // Step 4: Consent
  consentBank: boolean;
  consentPolice: boolean;
  consentCenter: boolean;
  disclaimerAccepted: boolean;
}

const STEPS = [
  { id: 1, title: "ข้อมูลส่วนบุคคล", icon: User },
  { id: 2, title: "ข้อมูลบัญชีธนาคาร", icon: CreditCard },
  { id: 3, title: "รายละเอียดเหตุการณ์", icon: FileText },
  { id: 4, title: "ความยินยอมและส่งคำร้อง", icon: CheckCircle }
];

const THAI_BANKS = [
  "ธนาคารไทยพาณิชย์",
  "ธนาคารกสิกรไทย",
  "ธนาคารกรุงเทพ",
  "ธนาคารกรุงไทย",
  "ธนาคารทหารไทยธนชาต",
  "ธนาคารกรุงศรีอยุธยา",
  "ธนาคารออมสิน",
  "ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร",
  "ธนาคารยูโอบี",
  "ธนาคารซิตี้แบงก์"
];

const Confess = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    nationalId: "",
    phone: "",
    email: "",
    address: "",
    province: "",
    postalCode: "",
    occupation: "",
    banks: [],
    accountNumbers: {},
    suspectedStartDate: "",
    stillActive: false,
    description: "",
    timeline: "",
    evidenceFiles: [],
    consentBank: true,
    consentPolice: false,
    consentCenter: false,
    disclaimerAccepted: false
  });

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    // Pre-fill user data if available
    const userProfile = localStorage.getItem('userProfile');
    if (userProfile) {
      const user = JSON.parse(userProfile);
      setFormData(prev => ({
        ...prev,
        firstName: user.name.split(' ')[0] || '',
        lastName: user.name.split(' ').slice(1).join(' ') || '',
        nationalId: user.nationalId || '',
        phone: user.phone || '',
        email: user.email || ''
      }));
    }
  }, [navigate]);

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBankSelect = (bank: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        banks: [...prev.banks, bank]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        banks: prev.banks.filter(b => b !== bank),
        accountNumbers: Object.fromEntries(
          Object.entries(prev.accountNumbers).filter(([key]) => key !== bank)
        )
      }));
    }
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const newFiles = Array.from(files);
      setFormData(prev => ({
        ...prev,
        evidenceFiles: [...prev.evidenceFiles, ...newFiles]
      }));
    }
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      evidenceFiles: prev.evidenceFiles.filter((_, i) => i !== index)
    }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.firstName && formData.lastName && formData.nationalId && formData.phone && formData.email);
      case 2:
        return formData.banks.length > 0 && formData.banks.every(bank => formData.accountNumbers[bank]);
      case 3:
        return !!(formData.description && formData.timeline);
      case 4:
        return formData.disclaimerAccepted && (formData.consentBank || formData.consentPolice || formData.consentCenter);
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitForm = async () => {
    if (!validateStep(4)) return;

    // Simulate form submission
    const referenceCode = `AM${new Date().getFullYear()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    
    // Save case to localStorage (mock)
    const cases = JSON.parse(localStorage.getItem('userCases') || '[]');
    const newCase = {
      id: Math.random().toString(36).substr(2, 9),
      referenceCode,
      status: 'SUBMITTED',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: formData.description,
      evidenceCount: formData.evidenceFiles.length
    };
    
    cases.push(newCase);
    localStorage.setItem('userCases', JSON.stringify(cases));
    
    // Redirect to dashboard with success message
    navigate('/dashboard?submitted=' + referenceCode);
  };

  const progress = (currentStep / 4) * 100;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <AppHeader />
      
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ยื่นคำร้องยุติการเป็นบัญชีม้า
          </h1>
          <p className="text-xl text-gray-600">
            กรอกข้อมูลอย่างละเอียดเพื่อความปลอดภัยของคุณ
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    isCompleted ? 'bg-primary border-primary text-primary-foreground' :
                    isActive ? 'border-primary text-primary' : 'border-gray-300 text-gray-400'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <Icon className="h-5 w-5" />
                    )}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    isActive ? 'text-primary' : isCompleted ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
          <Progress value={progress} className="w-full" />
        </div>

        {/* Step Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>ขั้นตอนที่ {currentStep}: {STEPS[currentStep - 1].title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="title">คำนำหน้า</Label>
                    <Select value={formData.title} onValueChange={(value) => handleInputChange('title', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="เลือกคำนำหน้า" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="นาย">นาย</SelectItem>
                        <SelectItem value="นาง">นาง</SelectItem>
                        <SelectItem value="นางสาว">นางสาว</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="firstName">ชื่อ *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="ชื่อ"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">นามสกุล *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="นามสกุล"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="birthDate">วันเกิด</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => handleInputChange('birthDate', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="nationalId">เลขบัตรประชาชน *</Label>
                    <Input
                      id="nationalId"
                      value={formData.nationalId}
                      onChange={(e) => handleInputChange('nationalId', e.target.value)}
                      placeholder="1234567890123"
                      maxLength={13}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">เบอร์โทรศัพท์ *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="081-234-5678"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">อีเมล *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">ที่อยู่</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="บ้านเลขที่ ซอย ถนน ตำบล อำเภอ"
                    rows={3}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="province">จังหวัด</Label>
                    <Input
                      id="province"
                      value={formData.province}
                      onChange={(e) => handleInputChange('province', e.target.value)}
                      placeholder="กรุงเทพมหานคร"
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">รหัสไปรษณีย์</Label>
                    <Input
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      placeholder="10110"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <Label htmlFor="occupation">อาชีพ</Label>
                    <Input
                      id="occupation"
                      value={formData.occupation}
                      onChange={(e) => handleInputChange('occupation', e.target.value)}
                      placeholder="พนักงานบริษัท"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Bank Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-semibold">เลือกธนาคารที่มีบัญชีถูกใช้เป็นบัญชีม้า *</Label>
                  <p className="text-sm text-gray-600 mb-4">เลือกธนาคารและกรอกหมายเลขบัญชีที่เกี่ยวข้อง</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {THAI_BANKS.map((bank) => (
                      <div key={bank} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={bank}
                            checked={formData.banks.includes(bank)}
                            onCheckedChange={(checked) => handleBankSelect(bank, checked as boolean)}
                          />
                          <Label htmlFor={bank} className="text-sm">{bank}</Label>
                        </div>
                        {formData.banks.includes(bank) && (
                          <Input
                            placeholder="หมายเลขบัญชี"
                            value={formData.accountNumbers[bank] || ''}
                            onChange={(e) => handleInputChange('accountNumbers', {
                              ...formData.accountNumbers,
                              [bank]: e.target.value
                            })}
                            className="ml-6"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="suspectedStartDate">วันที่คาดว่าเริ่มถูกใช้เป็นบัญชีม้า</Label>
                    <Input
                      id="suspectedStartDate"
                      type="date"
                      value={formData.suspectedStartDate}
                      onChange={(e) => handleInputChange('suspectedStartDate', e.target.value)}
                    />
                  </div>
                  <div className="flex items-center space-x-2 pt-6">
                    <Checkbox
                      id="stillActive"
                      checked={formData.stillActive}
                      onCheckedChange={(checked) => handleInputChange('stillActive', checked)}
                    />
                    <Label htmlFor="stillActive">บัญชียังถูกใช้งานอยู่</Label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Description & Evidence */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="description">อธิบายเหตุการณ์ที่เกิดขึ้น *</Label>
                  <p className="text-sm text-gray-600 mb-2">
                    โปรดอธิบายว่าคุณถูกชักชวนอย่างไร มีการข่มขู่หรือไม่ และรายละเอียดอื่นๆ ที่เกี่ยวข้อง
                  </p>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="ผมถูกติดต่อผ่าน Facebook โดยบุคคลแปลกหน้าที่อ้างว่ามีงานให้ทำ..."
                    rows={6}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="timeline">ไทม์ไลน์เหตุการณ์ *</Label>
                  <p className="text-sm text-gray-600 mb-2">
                    เรียงลำดับเหตุการณ์ตามเวลา เช่น การติดต่อครั้งแรก การโอนเงิน ฯลฯ
                  </p>
                  <Textarea
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    placeholder="มกราคม 2024: ถูกติดต่อผ่าน Facebook&#10;กุมภาพันธ์ 2024: เปิดบัญชีใหม่ตามที่ขอ..."
                    rows={6}
                    required
                  />
                </div>

                <div>
                  <Label>แนบหลักฐาน</Label>
                  <p className="text-sm text-gray-600 mb-4">
                    อัปโหลดหลักฐาน เช่น ภาพหน้าจอการสนทนา สลิปการโอนเงิน หรือเอกสารอื่นๆ (สูงสุด 20 MB ต่อไฟล์)
                  </p>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">ลากไฟล์มาวาง หรือคลิกเพื่อเลือกไฟล์</p>
                    <input
                      type="file"
                      multiple
                      accept="image/*,application/pdf,.doc,.docx"
                      onChange={(e) => handleFileUpload(e.target.files)}
                      className="hidden"
                      id="evidence-upload"
                    />
                    <Button variant="outline" asChild>
                      <label htmlFor="evidence-upload" className="cursor-pointer">
                        เลือกไฟล์
                      </label>
                    </Button>
                  </div>

                  {formData.evidenceFiles.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-medium">ไฟล์ที่เลือก:</p>
                      {formData.evidenceFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm">{file.name}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                          >
                            ลบ
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Consent */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <AlertCallout variant="info">
                  <AlertCalloutTitle>การให้ความยินยอม</AlertCalloutTitle>
                  <AlertCalloutDescription>
                    โปรดเลือกหน่วยงานที่คุณยินยอมให้เราส่งข้อมูลเพื่อดำเนินการยุติการเป็นบัญชีม้า
                  </AlertCalloutDescription>
                </AlertCallout>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      id="consentBank"
                      checked={formData.consentBank}
                      onCheckedChange={(checked) => handleInputChange('consentBank', checked)}
                    />
                    <div>
                      <Label htmlFor="consentBank" className="font-medium">ธนาคาร</Label>
                      <p className="text-sm text-gray-600">
                        ส่งข้อมูลไปยังธนาคารที่เกี่ยวข้องเพื่อตรวจสอบและระงับบัญชี
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      id="consentPolice"
                      checked={formData.consentPolice}
                      onCheckedChange={(checked) => handleInputChange('consentPolice', checked)}
                    />
                    <div>
                      <Label htmlFor="consentPolice" className="font-medium">สำนักงานตำรวจแห่งชาติ</Label>
                      <p className="text-sm text-gray-600">
                        ส่งข้อมูลไปยังหน่วยงานตำรวจเพื่อดำเนินคดีกับผู้กระทำผิด
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      id="consentCenter"
                      checked={formData.consentCenter}
                      onCheckedChange={(checked) => handleInputChange('consentCenter', checked)}
                    />
                    <div>
                      <Label htmlFor="consentCenter" className="font-medium">ศูนย์ประสานงานต่อต้านการฟอกเงิน</Label>
                      <p className="text-sm text-gray-600">
                        ส่งข้อมูลไปยังหน่วยงานกลางเพื่อการวิเคราะห์และป้องกัน
                      </p>
                    </div>
                  </div>
                </div>

                <AlertCallout variant="warning">
                  <AlertCalloutTitle>ข้อมูลสำคัญ</AlertCalloutTitle>
                  <AlertCalloutDescription>
                    <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                      <li>คุณสามารถเปลี่ยนแปลงความยินยอมได้ภายหลังผ่านแดชบอร์ด</li>
                      <li>ข้อมูลทั้งหมดจะถูกเข้ารหัสและรักษาความปลอดภัย</li>
                      <li>เราจะส่งข้อมูลเฉพาะที่จำเป็นสำหรับการดำเนินการเท่านั้น</li>
                      <li>คุณมีสิทธิ์ขอดูข้อมูลที่ถูกส่งไปยังหน่วยงานต่างๆ</li>
                    </ul>
                  </AlertCalloutDescription>
                </AlertCallout>

                <div className="flex items-start space-x-3 p-4 border-2 border-yellow-200 bg-yellow-50 rounded-lg">
                  <Checkbox
                    id="disclaimerAccepted"
                    checked={formData.disclaimerAccepted}
                    onCheckedChange={(checked) => handleInputChange('disclaimerAccepted', checked)}
                  />
                  <div>
                    <Label htmlFor="disclaimerAccepted" className="font-medium">ยอมรับข้อกำหนด *</Label>
                    <p className="text-sm text-gray-700 mt-1">
                      ข้าพเจ้ารับทราบและยอมรับ{" "}
                      <a href="/terms" className="text-primary hover:underline">ข้อกำหนดการใช้งาน</a>{" "}
                      และ{" "}
                      <a href="/privacy" className="text-primary hover:underline">นโยบายความเป็นส่วนตัว</a>{" "}
                      รวมถึงยืนยันว่าข้อมูลที่ให้มานั้นเป็นความจริง
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            ก่อนหน้า
          </Button>

          {currentStep < 4 ? (
            <Button
              onClick={nextStep}
              disabled={!validateStep(currentStep)}
            >
              ถัดไป
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={submitForm}
              disabled={!validateStep(4)}
              className="bg-primary hover:bg-primary/90"
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              ส่งคำร้อง
            </Button>
          )}
        </div>
      </div>

      <AppFooter />
    </div>
  );
};

export default Confess;