import { Route, Switch } from 'wouter';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import FullStackDevelopment from '../pages/services/FullStackDevelopment';
import FrontendDevelopment from '../pages/services/FrontendDevelopment';
import BackendApiDevelopment from '../pages/services/BackendApiDevelopment';
import DatabaseDesign from '../pages/services/DatabaseDesign';
import GovernmentPortalDevelopment from '../pages/services/GovernmentPortalDevelopment';
import CmsWordPressDevelopment from '../pages/services/CmsWordPressDevelopment';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import NotFound from '../pages/not-found';

export default function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/full-stack-development" component={FullStackDevelopment} />
      <Route path="/services/frontend-development" component={FrontendDevelopment} />
      <Route path="/services/backend-api-development" component={BackendApiDevelopment} />
      <Route path="/services/database-design" component={DatabaseDesign} />
      <Route path="/services/government-portal-development" component={GovernmentPortalDevelopment} />
      <Route path="/services/cms-wordpress-development" component={CmsWordPressDevelopment} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}
/*  */
