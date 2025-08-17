import { Shield, Phone, Mail, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export function AppFooter() {
  return (
    <footer className="border-t bg-gray-50/80 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-primary" />
              <div className="flex flex-col">
                <span className="font-semibold">เว็บไถ่บาป</span>
                <span className="text-xs text-muted-foreground">powered by RobloxMaster</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              แพลตฟอร์มไถ่บาปและช่วยเหลือผู้ที่ตกเป็นเหยื่อการหลอกลวง ดำเนินการด้วยความเข้าใจและเห็นอกเห็นใจ
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">บริการ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/assessment" className="text-muted-foreground hover:text-foreground">ประเมินความเสี่ยง</Link></li>
              <li><Link to="/confess" className="text-muted-foreground hover:text-foreground">ยื่นคำร้องยุติ</Link></li>
              <li><Link to="/dashboard" className="text-muted-foreground hover:text-foreground">ติดตามสถานะ</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">ข้อมูลสำคัญ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">นโยบายความเป็นส่วนตัว</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">ข้อกำหนดการใช้งาน</Link></li>
              <li><Link to="/disclaimer" className="text-muted-foreground hover:text-foreground">ข้อจำกัดความรับผิดชอบ</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">ติดต่อAOC</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>1411 (24 ชั่วโมง)</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>help@antimule.go.th</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 เว็บไถ่บาป powered by RobloxMaster
            </p>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <FileText className="h-3 w-3" />
              <span>ข้อมูลในเว็บไซต์นี้ไม่ถือเป็นคำปรึกษาทางกฎหมาย</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
