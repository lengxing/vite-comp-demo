import { defineComponent as o, resolveComponent as n, openBlock as a, createBlock as c, mergeProps as s, createSlots as p, renderList as u, withCtx as d, renderSlot as i } from "vue";
const f = o({
  name: "TestInput"
}), b = /* @__PURE__ */ Object.assign(f, {
  props: {
    clearable: {
      type: Boolean,
      default: !0
    },
    placeholder: {
      type: String,
      default: "请输入"
    }
  },
  setup(t) {
    return (e, m) => {
      const r = n("el-input");
      return a(), c(r, s(e.$attrs, {
        placeholder: t.placeholder,
        clearable: t.clearable
      }), p({ _: 2 }, [
        u(e.$slots, (_, l) => ({
          name: l,
          fn: d(() => [
            i(e.$slots, l)
          ])
        }))
      ]), 1040, ["placeholder", "clearable"]);
    };
  }
});
export {
  b as default
};
