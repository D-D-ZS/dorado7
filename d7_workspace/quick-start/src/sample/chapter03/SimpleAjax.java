package sample.chapter03;

import org.springframework.stereotype.Component;

import com.bstek.dorado.annotation.Expose;

@Component
public class SimpleAjax {

	@Expose
	public String toUpperCase(String str){
		return "input:\n"+str+"\n\n"+"output:\n"+str.toUpperCase();
	}
	
	
}
