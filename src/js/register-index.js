import { registerListener } from './listeners/auth/register.js';
import { locateToSignIn } from './router/locateToSignIn.js';
registerListener();
locateToSignIn();
