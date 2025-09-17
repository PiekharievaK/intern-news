function virtualModules() {
  return {
    name: 'virtual-modules',
    resolveId(id: string) {
      if (id === 'virtual:plugins') {
        return id
      }
      return null
    },
    load(id: string) {
      if (id === 'virtual:plugins') {
        const modules = ['module1', 'module2', 'module3']; 
        return modules
          .map((m) => `import './src/modules/${m}.ts';`)
          .join('\n');
      }
      return null;
    },
  };
}

export default virtualModules;
