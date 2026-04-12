export interface DesignSystem {
  primaryColor: string
  secondaryColor: string | null
  neutralColor: string
  typography: string
  gridSystem: string
}

export interface UIDesign {
  designSystem: DesignSystem
  highlights: string[]
}

export interface KeyFeatures {
  [key: string]: string[] | undefined
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
    techStack: string[]
    slug: string
  }
  overview: {
    description: string
  }
  problemStatement: string[]
  solution: string[]
  uiDesign: UIDesign
  frontEndImplementation: FrontEndImplementation | null
  challengesAndSolutions: ChallengesAndSolutions
  learnings: string[]
  resultImpact: string[]
}
