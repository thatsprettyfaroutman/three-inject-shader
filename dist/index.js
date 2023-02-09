"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInjectShader = void 0;
const createInjectShader = (shader, shaderName) => ((position, code) => {
    const inject = (codeStrings, ...interpolations) => {
        const codeArr = [position, codeStrings[0]];
        for (let i = 0, len = interpolations.length; i < len; i++) {
            codeArr.push(interpolations[i], codeStrings[i + 1]);
        }
        shader[shaderName] = shader[shaderName].replace(position, codeArr.join('\n'));
        return shader[shaderName];
    };
    if (code) {
        return inject `${code}`;
    }
    return inject;
});
exports.createInjectShader = createInjectShader;
//# sourceMappingURL=index.js.map