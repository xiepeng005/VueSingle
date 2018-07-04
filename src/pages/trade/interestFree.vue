<template>
  <div>
    <Header :name="headerName"/>
    <div class="m-body">
      <div class="trade-top">
        <div class="trade-detail mt10">
          <ul>
            <li>
              <div class="label">保证金</div>
              <div class="flex"><strong class="font-red font18" v-cloak>{{nowProduct.moneyMin | fMoney}}</strong>元</div>
            </li>
            <li>
              <div class="label">申请资金</div>
              <div class="flex"><strong class="font-red font18" v-cloak>{{nowProduct.moneyMax | fMoney}}</strong>元</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="trade-money mt10">
        <div class="money-total">总资金：<strong v-cloak>{{nowProduct.moneyTotal | fMoney}}</strong>元<span>(保证金+申请资金)</span></div>
        <div class="money-detail">
          <div class="money-warn">
            <p>预警线</p>
            <span v-text="nowProduct.moneyWarn">21,200.00</span>
          </div>
          <div class="money-openline">
            <p>止损线</p>
            <span v-text="nowProduct.moneyOpenLine">20,800.00</span>
          </div>
          <div class="money-lines">
            <div class="lines1"></div>
            <div class="lines2"></div>
          </div>
        </div>
      </div>
      <div class="trade-detail">
        <ul>
          <li>
            <div class="label">单票持仓：</div>
            <div class="flex">主板≤80%,创业板≤60%</div>
          </li>
          <li>
            <div class="label">持仓时间：</div>
            <div class="flex">仅限<span v-text="nowProduct.monthMin">30</span>个自然日</div>
          </li>
          <li>
            <div class="label">收益分配：</div>
            <div class="flex">盈利100%归您</div>
          </li>
          <li>
            <div class="label">管理费：</div>
            <div class="flex"><span id="fee">0</span>元</div>
          </li>
          <li>
            <div class="label">应付：</div>
            <div class="flex"><strong class="font-red font18" id="paymoney">2000.00</strong>元</div>
          </li>
        </ul>
      </div>
      <div class="trade-bottom">
        <!--<div class="check-box">
            <input type="checkbox" id="trade_protocol" name="trade_protocol" checked="checked" />
            <label for="trade_protocol">我已阅读并同意<a href="JavaScript:void(0)" onclick="protocolTrade()">《操盘协议》</a></label>
        </div>-->
        <input type="hidden" id="productid" :value="nowProduct.id"/>
        <a href="JavaScript:void(0);" class="btn mt15" onclick="startstock()">立即申请</a>
      </div>
      <div class="trade-rules mt10">
        <div class="title">活动规则</div>
        <p>1、赠送 <span v-text="nowProduct.moneyMax">20000</span>元实盘资金（完全免费）;</p>
        <p>2、您交<span v-text="nowProduct.moneyMin">2000</span>元保证金（结束时如无亏损全额返还，如亏损则扣除亏损剩余返还）;</p>
        <p>3、总共<span v-text="nowProduct.moneyTotal">22000</span>元实盘资金（由您操盘，盈利全归您);</p>
        <p>4、盈利全归您，亏损自负（无亏损保证金全额退还，如交易账户总资产低于<span v-text="nowProduct.moneyOpenLine">20800.00</span>元将会自动平仓并终止体验，亏损将从保证金中扣除，超出保证金亏损部分由点点聚承担）;</p>
        <p>5、免息操盘资金仅限使用<span v-text="nowProduct.monthMin">30</span>个自然日，第<span v-text="nowProduct.monthMin">30</span>个自然日只能卖出不能买入，如第<span v-text="nowProduct.monthMin">30</span>个自然日未卖出股票，系统将在14:30后执行自动卖出指令，不保证卖出价格。</p>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  data () {
    return {
      headerName: '免息体验',
      product: [],
      products: [],
      nowProduct: []
    }
  },
  components: {Header},
  created: function () {
    this.$nextTick(() => {
      this.innitFreeProduct()
    })
  },
  methods: {
    innitFreeProduct: function () {
      let _self = this
      this.$axios.get('/tools/list_ajax.ashx', {act: 'Astock', productType: '0'}, function (response) {
        if (response.status >= 200 && response.status < 300) {
          _self.product = response.data.product
          _self.products = response.data.products
          if (_self.products.length > 0) {
            let prod = _self.nowProduct = _self.products[0]
            prod.moneyTotal = (prod.moneyMin + prod.moneyMax)
            prod.moneyOpenLine = (prod.moneyMin * prod.moneyTimes * prod.rateOpenLine)
            prod.moneyWarn = (prod.moneyMin * prod.moneyTimes * prod.rateWarn)
          }
          console.log(_self.nowProduct)
        } else {
          console.log(response.message)
        }
      })
    }
  }
}
</script>
<style src="./trade.css"></style>
