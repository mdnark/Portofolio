export interface MenuItem {
  id: string
  name: string
  isActive: boolean
  icon?: React.ReactNode
}

export const listMenu: MenuItem[] = [
  { name: 'Home', isActive: true, id: 'home' },
  { name: 'About', isActive: false, id: 'about_me' },
  { name: 'Services', isActive: false, id: 'services' },
  { name: 'Projects', isActive: false, id: 'projects' },
]