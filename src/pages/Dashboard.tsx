import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LogOut, User, BookOpen, Calendar, Award } from "lucide-react";
import universityLogo from "@/assets/university-logo.png";
import studentPhoto from "@/assets/student-photo.png";
import ResultsTable from "@/components/ResultsTable";
const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  const studentInfo = {
    name: "Kebron Dereje Tesfaye",
    department: "Computer Science",
    section: "D",
    college: "College of Natural and Computational Sciences",
    university: "St. Mary University",
    studentId: "SMU/2024/CS/0847",
    enrollmentYear: "2024",
    semester: "First Semester",
    academicYear: "2025/2026"
  };
  return <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-primary shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-4">
              <img alt="St. Mary University Logo" className="h-12 w-12 rounded-full bg-white p-1" src="/lovable-uploads/c7ce1d53-8840-405f-8f45-4d13aa6f1182.jpg" />
              <div>
                <h1 className="text-primary-foreground text-lg font-bold">
                  St. Mary University
                </h1>
                <p className="text-primary-foreground/80 text-xs">
                  Student Information System
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:block text-right">
                <p className="text-primary-foreground text-sm font-medium">
                  Welcome, Kebron
                </p>
                <p className="text-primary-foreground/70 text-xs">
                  Last login: Jan 11, 2025
                </p>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout} className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
        {/* Sub Navigation */}
        <div className="bg-primary/90 border-t border-primary-foreground/10">
          <div className="container mx-auto px-4">
            <nav className="flex gap-1 py-2 overflow-x-auto">
              <NavItem icon={User} label="Profile" active />
              <NavItem icon={BookOpen} label="Courses" />
              <NavItem icon={Award} label="Results" />
              <NavItem icon={Calendar} label="Schedule" />
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {/* Student Profile Card */}
        <Card className="mb-6 border-l-4 border-l-portal-gold shadow-md animate-fade-in">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Student Photo */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-lg overflow-hidden border-4 border-primary/20 shadow-lg mx-auto md:mx-0">
                  <img alt="Student Photo" className="w-full h-full object-cover" src="/lovable-uploads/cb042de1-d47c-4548-a67e-7c7aae6c4c0e.jpg" />
                </div>
              </div>

              {/* Student Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {studentInfo.name}
                    </h2>
                    <p className="text-primary font-medium mt-1">
                      {studentInfo.studentId}
                    </p>
                  </div>
                  <div className="bg-portal-gold/20 px-4 py-2 rounded-lg border border-portal-gold/30">
                    <p className="text-xs text-muted-foreground">Academic Year</p>
                    <p className="font-bold text-foreground">{studentInfo.academicYear}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  <InfoItem label="Department" value={studentInfo.department} />
                  <InfoItem label="Section" value={studentInfo.section} />
                  <InfoItem label="Semester" value={studentInfo.semester} />
                  <InfoItem label="College" value={studentInfo.college} />
                  <InfoItem label="University" value={studentInfo.university} />
                  <InfoItem label="Enrollment Year" value={studentInfo.enrollmentYear} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="animate-fade-in" style={{
        animationDelay: "0.1s"
      }}>
          <div className="flex items-center justify-between mb-4 text-secondary-foreground">
            <div>
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Award className="h-5 w-5 text-portal-gold" />
                Semester Report
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                First Semester 2024/2025 • Computer Science Department
              </p>
            </div>
            <div className="hidden sm:block bg-primary/10 px-3 py-1 rounded-full">
              <span className="text-xs font-medium text-primary">
                Academic Results
              </span>
            </div>
          </div>

          <ResultsTable />

          {/* Legend */}
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-portal-success/30 rounded"></span>
              <span>Score Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-muted rounded"></span>
              <span>Pending / Not Released</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary/5 border-t py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 St. Mary University. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Student Information System v2.0 • Contact: registrar@smuc.edu.et
          </p>
        </div>
      </footer>
    </div>;
};
const NavItem = ({
  icon: Icon,
  label,
  active = false
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}) => <button className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${active ? "bg-primary-foreground/15 text-primary-foreground" : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"}`}>
    <Icon className="h-4 w-4" />
    {label}
  </button>;
const InfoItem = ({
  label,
  value
}: {
  label: string;
  value: string;
}) => <div>
    <p className="text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
    <p className="text-sm font-medium text-foreground mt-0.5">{value}</p>
  </div>;
export default Dashboard;