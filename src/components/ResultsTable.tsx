import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

interface CourseResult {
	no: number;
	courseName: string;
	courseCode: string;
	midExam: string;
	assignment: string;
	attendance: string;
	finalExam: string;
	gpa: string;
}

const resultsData: CourseResult[] = [
	{
		no: 1,
		courseName: "Mathematics for Natural Sciences",
		courseCode: "Math 1011",
		midExam: "18 / 25",
		assignment: "7 / 10",
		attendance: "4 / 5",
		finalExam: "60 / 75",
		gpa: "B",
	},
	{
		no: 2,
		courseName: "General Psychology",
		courseCode: "Psyc 1011",
		midExam: "21 / 25",
		assignment: "8 / 10",
		attendance: "4 / 5",
		finalExam: "65 / 75",
		gpa: "B+",
	},
	{
		no: 3,
		courseName: "Anthropology",
		courseCode: "PHY 1011",
		midExam: "22 / 25",
		assignment: "8 / 10",
		attendance: "4 / 5",
		finalExam: "68 / 75",
		gpa: "B+",
	},
	{
		no: 4,
		courseName: "Civic and Moral Education",
		courseCode: "LoCT 1011",
		midExam: "19 / 25",
		assignment: "7 / 10",
		attendance: "4 / 5",
		finalExam: "62 / 75",
		gpa: "B",
	},
	{
		no: 5,
		courseName: "Computing Science",
		courseCode: "GeES 1011",
		midExam: "23 / 25",
		assignment: "9 / 10",
		attendance: "5 / 5",
		finalExam: "70 / 75",
		gpa: "A",
	},
	{
		no: 6,
		courseName: "Communicative English Language Skills",
		courseCode: "Eng 1011",
		midExam: "20 / 25",
		assignment: "8 / 10",
		attendance: "4 / 5",
		finalExam: "67 / 75",
		gpa: "A-",
	},
	{
		no: 7,
		courseName: "Social Media Graphics",
		courseCode: "SMG 1011",
		midExam: "21 / 25",
		assignment: "7 / 10",
		attendance: "4 / 5",
		finalExam: "63 / 75",
		gpa: "B",
	},
];

const getGradePoint = (grade: string): number => {
	switch (grade) {
		case "A":
			return 4.0;
		case "A-":
			return 3.7;
		case "B+":
			return 3.3;
		case "B":
			return 3.0;
		case "B-":
			return 2.7;
		case "C+":
			return 2.3;
		case "C":
			return 2.0;
		case "D":
			return 1.0;
		case "F":
			return 0.0;
		default:
			return 0.0;
	}
};

const calculateGPA = (courses: CourseResult[]): number => {
	const totalPoints = courses.reduce(
		(sum, course) => sum + getGradePoint(course.gpa),
		0,
	);
	return totalPoints / courses.length;
};

const ResultsTable = () => {
	const semesterGPA = calculateGPA(resultsData).toFixed(2);
	return (
		<div className="rounded-lg border border-border overflow-hidden shadow-sm">
			<div className="overflow-x-auto">
				<Table>
					<TableHeader>
						<TableRow className="bg-portal-table-header hover:bg-portal-table-header">
							<TableHead className="text-white font-semibold text-center w-16">
								No.
							</TableHead>
							<TableHead className="text-white font-semibold min-w-[200px]">
								Course Name
							</TableHead>
							<TableHead className="text-white font-semibold">
								Course Code
							</TableHead>
							<TableHead className="text-white font-semibold text-center">
								Mid Exam
							</TableHead>
							<TableHead className="text-white font-semibold text-center">
								Assignment
							</TableHead>
							<TableHead className="text-white font-semibold text-center">
								Attendance
							</TableHead>
							<TableHead className="text-white font-semibold text-center">
								Final Exam
							</TableHead>
							<TableHead className="text-white font-semibold text-center">
								GPA
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{resultsData.map((course, index) => (
							<TableRow
								key={course.no}
								className={`${
									index % 2 === 1 ? "bg-portal-table-stripe" : "bg-card"
								} hover:bg-muted/50 transition-colors`}
							>
								<TableCell className="text-center font-medium text-foreground">
									{course.no}
								</TableCell>
								<TableCell className="font-medium text-foreground">
									{course.courseName}
								</TableCell>
								<TableCell className="text-muted-foreground">
									{course.courseCode === "—" ? (
										<span className="italic text-muted-foreground/60">
											Not assigned
										</span>
									) : (
										course.courseCode
									)}
								</TableCell>
								<TableCell className="text-center">
									<span className="bg-portal-success/15 text-portal-success px-3 py-1 rounded-full text-sm font-semibold">
										{course.midExam}
									</span>
								</TableCell>
								<TableCell className="text-center">
									<span className="bg-portal-success/15 text-portal-success px-3 py-1 rounded-full text-sm font-semibold">
										{course.assignment}
									</span>
								</TableCell>
								<TableCell className="text-center">
									<span className="bg-portal-success/15 text-portal-success px-3 py-1 rounded-full text-sm font-semibold">
										{course.attendance}
									</span>
								</TableCell>
								<TableCell className="text-center">
									<span className="bg-portal-success/15 text-portal-success px-3 py-1 rounded-full text-sm font-semibold">
										{course.finalExam}
									</span>
								</TableCell>
								<TableCell className="text-center">
									<span className="bg-portal-success/15 text-portal-success px-3 py-1 rounded-full text-sm font-semibold">
										{course.gpa}
									</span>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>

			{/* Summary Row */}
			<div className="bg-muted/50 px-4 py-3 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
				<div className="text-sm text-muted-foreground">
					<span className="font-medium text-foreground">Total Courses:</span>{" "}
					{resultsData.length}
				</div>
				<div className="text-sm">
					<span className="text-muted-foreground">Semester GPA:</span>{" "}
					<span className="font-semibold text-portal-success">
						{semesterGPA}
					</span>
				</div>
				<div className="text-sm">
					<span className="text-muted-foreground">Cumulative GPA:</span>{" "}
					<span className="font-semibold text-portal-pending">
						Not yet released
					</span>
				</div>
			</div>
		</div>
	);
};

const PendingCell = ({ value }: { value: string }) => {
	if (value === "—") {
		return <span className="text-muted-foreground/50 font-medium">—</span>;
	}
	return <span className="italic text-muted-foreground text-sm">{value}</span>;
};

export default ResultsTable;
