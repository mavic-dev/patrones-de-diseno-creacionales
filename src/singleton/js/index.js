
class Singleton {
    static instance = undefined;

    constructor(version) {
        this.version = version;
    }

    static getInstance(version) {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(version);
        }
        return Singleton.instance
    }
}

function appSingleton() {
    const singleton1 = Singleton.getInstance('version1')
    const singleton2 = Singleton.getInstance('version2')
    const singleton3 = Singleton.getInstance('version3')
    console.log(singleton1 === singleton2)
    console.log(singleton1 === singleton3)
}

appSingleton();