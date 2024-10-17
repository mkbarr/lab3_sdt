import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext){

	const provider = vscode.languages.registerCompletionItemProvider('cpp', {
		
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, 
			token: vscode.CancellationToken, context: vscode.CompletionContext){

			const hello_world = new vscode.CompletionItem('Hello World');
			hello_world.insertText = new vscode.SnippetString('std::cout << "Hello World!" << std::endl;');
			hello_world.detail = 'Outputs greeting to std::cout';

			const start_code = new vscode.CompletionItem('cpp template');
			start_code.insertText = new vscode.SnippetString('#include <iostream>\n\nint main (int argc, char** argv){\n\t$0\n\treturn 0;\n}');
			start_code.detail = 'Cpp application template';

			const for_plus = new vscode.CompletionItem('pfor');
			for_plus.insertText = new vscode.SnippetString('for (int ${1:i} = 0; $1 < $2; $1++){\n\t$0\n}');
			for_plus.detail = 'Increasing for cycle template';
			
			const for_minus = new vscode.CompletionItem('mfor');
			for_minus.insertText = new vscode.SnippetString('for (int ${1:i} = $2; $1 >= 0; $1--){\n\t$0\n}');
			for_minus.detail = 'Decreasing for cycle template';
			
			const array_cout = new vscode.CompletionItem('cout array');
			array_cout.insertText = new vscode.SnippetString('for (int i = 0; i < ${1:arr_len}; i++){std::cout << ${2:arr}[i] << " ";std::cout << std::endl;');
			array_cout.detail = 'Outputs an array to std::cout';

			const while_cycle = new vscode.CompletionItem('twhile');
			while_cycle.insertText = new vscode.SnippetString('while (${1:condition){\n\t$0}');
			while_cycle.detail = 'While cycle template';

			const if_condition = new vscode.CompletionItem('tif');
			if_condition.insertText = new vscode.SnippetString('if (${1:condition}){\n\t$0\n}');
			if_condition.detail = 'If condition template';

			return [hello_world, start_code, for_plus, for_minus, array_cout, while_cycle, if_condition];
		}
	});
	context.subscriptions.push(provider);
}

export function deactivate(){}
