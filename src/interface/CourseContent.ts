export interface CourseContent {
    courseId: number;
    courseTitle: string;
    courseDescription: string;
    courseImage: string;
    courseImageAlt: string;
    courseTrainerList: [{
        trainerFirstName: string;
        trainerLastName: string
    }];
    hasModules: boolean
}