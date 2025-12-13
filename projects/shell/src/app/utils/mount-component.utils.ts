import { loadRemoteModule } from '@angular-architects/native-federation';

export async function mountComponent(
  componentInfos: {
    remoteName: string;
    exposedModule: string;
    componentName: string;
  },
  hostTarget: HTMLElement
): Promise<void> {
  const { remoteName, exposedModule, componentName } = componentInfos;
  try {
    await loadRemoteModule({
      remoteName,
      exposedModule,
    });
  } catch (e) {
    console.error(e);
  }

  const element = document.createElement(componentName);
  hostTarget.appendChild(element);
}
