export interface DesignSystem {
  primaryColor: string
  secondaryColor: string
  neutralColor: string
  typography: string
  gridSystem: string
}

export interface UIDesign {
  designSystem: DesignSystem
  highlights: string[]
}

export interface KeyFeatures {
  authentication: string[]
  servicesAndPackages: string[]
  transactions: string[]
  adminDashboard: string[]
  dataManagement: string[]
}

export interface FrontEndImplementation {
  keyFeatures: KeyFeatures
}

export interface ChallengesAndSolutions {
  challenges: string[]
  solutions: string[]
}

export interface ProjectDetail {
  project: {
    name: string
    role: string[]
    period: string
    src: string
    repository: string
    techStack: string[]
    slug: string
  }
  overview: {
    description: string
  }
  problemStatement: string[]
  solution: string[]
  uiDesign: UIDesign
  frontEndImplementation: FrontEndImplementation
  challengesAndSolutions: ChallengesAndSolutions
  learnings: string[]
  resultImpact: string[]
}